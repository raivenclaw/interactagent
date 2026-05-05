'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  PlusIcon,
  FileTextIcon,
  Trash2Icon,
  EyeIcon,
  PrinterIcon,
  MailIcon,
  ArrowLeftIcon,
  XIcon,
} from 'lucide-react';
import Link from 'next/link';

// ── Types ────────────────────────────────────────────────────────────────────

interface Client {
  id: string;
  bedrijfsnaam: string;
  contactpersoon: string;
  email: string;
  adres: string;
  kvk: string;
  btwNummer: string;
}

interface InvoiceLine {
  id: string;
  omschrijving: string;
  uren: number;
  uurtarief: number;
  bedrag: number;
}

type InvoiceStatus = 'concept' | 'verzonden' | 'betaald';

interface Invoice {
  id: string;
  factuurnummer: string;
  klantId: string;
  datum: string;
  betalingstermijn: number;
  vervaldatum: string;
  lines: InvoiceLine[];
  subtotaal: number;
  btw: number;
  totaal: number;
  status: InvoiceStatus;
  opmerkingen: string;
}

// ── Storage helpers ─────────────────────────────────────────────────────────

const CLIENTS_KEY = 'invoice_clients';
const INVOICES_KEY = 'invoice_invoices';

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function loadClients(): Client[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CLIENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveClients(c: Client[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CLIENTS_KEY, JSON.stringify(c));
}

function loadInvoices(): Invoice[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(INVOICES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveInvoices(i: Invoice[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(INVOICES_KEY, JSON.stringify(i));
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(n);
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// ── Demo data ───────────────────────────────────────────────────────────────

function seedDemoData(): { clients: Client[]; invoices: Invoice[] } {
  const clients: Client[] = [
    {
      id: 'c1',
      bedrijfsnaam: 'TechFlow BV',
      contactpersoon: 'Jan de Vries',
      email: 'jan@techflow.nl',
      adres: 'Keizersgracht 200, 1016 DZ Amsterdam',
      kvk: '87654321',
      btwNummer: 'NL987654321B01',
    },
    {
      id: 'c2',
      bedrijfsnaam: 'Bloom Webshop',
      contactpersoon: 'Lisa Bloem',
      email: 'lisa@bloomwebshop.nl',
      adres: 'Oudegracht 50, 3511 AR Utrecht',
      kvk: '11223344',
      btwNummer: 'NL112233445B01',
    },
    {
      id: 'c3',
      bedrijfsnaam: 'Zen Yoga Studio',
      contactpersoon: 'Sophie Jansen',
      email: 'sophie@zenyoga.nl',
      adres: 'Prinsengracht 75, 1015 DG Amsterdam',
      kvk: '55667788',
      btwNummer: 'NL556677889B01',
    },
    {
      id: 'c4',
      bedrijfsnaam: 'Bakkerij Zoet',
      contactpersoon: 'Pieter Bakker',
      email: 'pieter@bakkerijzoet.nl',
      adres: 'Markt 12, 5211 JA Den Bosch',
      kvk: '99887766',
      btwNummer: 'NL998877665B01',
    },
    {
      id: 'c5',
      bedrijfsnaam: 'RetroSmart',
      contactpersoon: 'Thomas Smit',
      email: 'thomas@retrosmart.nl',
      adres: 'Coolsingel 40, 3012 AA Rotterdam',
      kvk: '44556677',
      btwNummer: 'NL445566778B01',
    },
  ];

  const invoices: Invoice[] = [
    {
      id: 'i1',
      factuurnummer: 'FACT-2026-001',
      klantId: 'c1',
      datum: '2026-01-15',
      betalingstermijn: 30,
      vervaldatum: '2026-02-14',
      lines: [
        { id: 'l1', omschrijving: 'Website redesign', uren: 20, uurtarief: 125, bedrag: 2500 },
        { id: 'l2', omschrijving: 'SEO optimalisatie', uren: 10, uurtarief: 125, bedrag: 1250 },
      ],
      subtotaal: 3750,
      btw: 787.5,
      totaal: 4537.5,
      status: 'betaald',
      opmerkingen: '',
    },
    {
      id: 'i2',
      factuurnummer: 'FACT-2026-002',
      klantId: 'c2',
      datum: '2026-02-01',
      betalingstermijn: 30,
      vervaldatum: '2026-03-03',
      lines: [
        { id: 'l3', omschrijving: 'Webshop ontwikkeling', uren: 18, uurtarief: 125, bedrag: 2250 },
      ],
      subtotaal: 2250,
      btw: 472.5,
      totaal: 2722.5,
      status: 'verzonden',
      opmerkingen: '',
    },
    {
      id: 'i3',
      factuurnummer: 'FACT-2026-003',
      klantId: 'c3',
      datum: '2026-02-15',
      betalingstermijn: 14,
      vervaldatum: '2026-03-01',
      lines: [
        { id: 'l4', omschrijving: 'Booking systeem integratie', uren: 12, uurtarief: 125, bedrag: 1500 },
      ],
      subtotaal: 1500,
      btw: 315,
      totaal: 1815,
      status: 'verzonden',
      opmerkingen: '',
    },
    {
      id: 'i4',
      factuurnummer: 'FACT-2026-004',
      klantId: 'c4',
      datum: '2026-03-01',
      betalingstermijn: 14,
      vervaldatum: '2026-03-15',
      lines: [
        { id: 'l5', omschrijving: 'Logo ontwerp', uren: 5, uurtarief: 125, bedrag: 625 },
        { id: 'l6', omschrijving: 'Visitekaartje design', uren: 2.5, uurtarief: 125, bedrag: 312.5 },
      ],
      subtotaal: 937.5,
      btw: 196.88,
      totaal: 1134.38,
      status: 'concept',
      opmerkingen: 'Wacht op klant goedkeuring logo',
    },
    {
      id: 'i5',
      factuurnummer: 'FACT-2026-005',
      klantId: 'c5',
      datum: '2026-03-10',
      betalingstermijn: 30,
      vervaldatum: '2026-04-09',
      lines: [
        { id: 'l7', omschrijving: 'App prototype', uren: 25, uurtarief: 125, bedrag: 3125 },
        { id: 'l8', omschrijving: 'User testing sessies', uren: 12.5, uurtarief: 125, bedrag: 1562.5 },
      ],
      subtotaal: 4687.5,
      btw: 984.38,
      totaal: 5671.88,
      status: 'concept',
      opmerkingen: '',
    },
  ];

  saveClients(clients);
  saveInvoices(invoices);
  return { clients, invoices };
}

// ── Status badge component ──────────────────────────────────────────────────

function StatusBadge({ status }: { status: InvoiceStatus }) {
  const config: Record<InvoiceStatus, { label: string; className: string }> = {
    concept: {
      label: 'Concept',
      className: 'bg-gray-100 text-gray-700 border-gray-200',
    },
    verzonden: {
      label: 'Verzonden',
      className: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    betaald: {
      label: 'Betaald',
      className: 'bg-green-50 text-green-700 border-green-200',
    },
  };
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${c.className}`}
    >
      {c.label}
    </span>
  );
}

// ── Input component (inline, styled to match) ──────────────────────────────

function Input({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

function Textarea({
  className = '',
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

function Select({
  className = '',
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

// ── Company info (placeholder) ──────────────────────────────────────────────

const COMPANY = {
  naam: 'De Clerq Agency BV',
  adres: 'Herengracht 100',
  postcode: '1015 AA Amsterdam',
  kvk: '12345678',
  btw: 'NL123456789B01',
  iban: 'NL00 INGB 0000 0000 00',
};

// ── Main page component ─────────────────────────────────────────────────────

type View = 'list' | 'create' | 'preview';

export default function InvoicesPage() {
  const [mounted, setMounted] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [view, setView] = useState<View>('list');
  const [statusFilter, setStatusFilter] = useState<InvoiceStatus | 'all'>('all');
  const [previewInvoice, setPreviewInvoice] = useState<Invoice | null>(null);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  // Form state
  const [formKlantId, setFormKlantId] = useState('');
  const [formNewClient, setFormNewClient] = useState(false);
  const [formClient, setFormClient] = useState<Omit<Client, 'id'>>({
    bedrijfsnaam: '',
    contactpersoon: '',
    email: '',
    adres: '',
    kvk: '',
    btwNummer: '',
  });
  const [formLines, setFormLines] = useState<InvoiceLine[]>([
    { id: uid(), omschrijving: '', uren: 0, uurtarief: 125, bedrag: 0 },
  ]);
  const [formDatum, setFormDatum] = useState(new Date().toISOString().slice(0, 10));
  const [formTermijn, setFormTermijn] = useState(30);
  const [formOpmerkingen, setFormOpmerkingen] = useState('');

  // Client dialog state
  const [clientDialogOpen, setClientDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existingClients = loadClients();
    const existingInvoices = loadInvoices();
    if (existingClients.length === 0 && existingInvoices.length === 0) {
      const demo = seedDemoData();
      setClients(demo.clients);
      setInvoices(demo.invoices);
    } else {
      setClients(existingClients);
      setInvoices(existingInvoices);
    }
  }, []);

  const persist = useCallback(
    (newInvoices: Invoice[], newClients?: Client[]) => {
      setInvoices(newInvoices);
      saveInvoices(newInvoices);
      if (newClients) {
        setClients(newClients);
        saveClients(newClients);
      }
    },
    []
  );

  // Filtered invoices
  const filteredInvoices = useMemo(() => {
    if (statusFilter === 'all') return invoices;
    return invoices.filter((i) => i.status === statusFilter);
  }, [invoices, statusFilter]);

  // Outstanding amount (concept + verzonden)
  const outstanding = useMemo(() => {
    return invoices
      .filter((i) => i.status === 'concept' || i.status === 'verzonden')
      .reduce((sum, i) => sum + i.totaal, 0);
  }, [invoices]);

  const getClient = useCallback(
    (id: string) => clients.find((c) => c.id === id),
    [clients]
  );

  // Next invoice number
  const nextNumber = useMemo(() => {
    const year = new Date().getFullYear();
    const existing = invoices
      .map((i) => {
        const match = i.factuurnummer.match(/FACT-\d{4}-(\d{3})/);
        return match ? parseInt(match[1], 10) : 0;
      })
      .filter((n) => n > 0);
    const max = existing.length > 0 ? Math.max(...existing) : 0;
    return `FACT-${year}-${String(max + 1).padStart(3, '0')}`;
  }, [invoices]);

  // Auto-calc line bedrag
  const updateLine = (lineId: string, field: string, value: string | number) => {
    setFormLines((prev) =>
      prev.map((l) => {
        if (l.id !== lineId) return l;
        const updated = { ...l, [field]: value };
        if (field === 'uren' || field === 'uurtarief') {
          updated.bedrag = Number(updated.uren) * Number(updated.uurtarief);
        }
        return updated;
      })
    );
  };

  const addLine = () => {
    setFormLines((prev) => [
      ...prev,
      { id: uid(), omschrijving: '', uren: 0, uurtarief: 125, bedrag: 0 },
    ]);
  };

  const removeLine = (lineId: string) => {
    setFormLines((prev) => (prev.length > 1 ? prev.filter((l) => l.id !== lineId) : prev));
  };

  const formSubtotaal = useMemo(
    () => formLines.reduce((s, l) => s + l.bedrag, 0),
    [formLines]
  );
  const formBtw = useMemo(() => Math.round(formSubtotaal * 0.21 * 100) / 100, [formSubtotaal]);
  const formTotaal = useMemo(
    () => Math.round((formSubtotaal + formBtw) * 100) / 100,
    [formSubtotaal, formBtw]
  );
  const formVervaldatum = useMemo(
    () => addDays(formDatum, formTermijn),
    [formDatum, formTermijn]
  );

  const resetForm = () => {
    setFormKlantId('');
    setFormNewClient(false);
    setFormClient({
      bedrijfsnaam: '',
      contactpersoon: '',
      email: '',
      adres: '',
      kvk: '',
      btwNummer: '',
    });
    setFormLines([{ id: uid(), omschrijving: '', uren: 0, uurtarief: 125, bedrag: 0 }]);
    setFormDatum(new Date().toISOString().slice(0, 10));
    setFormTermijn(30);
    setFormOpmerkingen('');
    setEditingInvoice(null);
  };

  const handleSave = (status: InvoiceStatus) => {
    let klantId = formKlantId;

    // If new client, save it first
    if (formNewClient && formClient.bedrijfsnaam) {
      const newClient: Client = { id: uid(), ...formClient };
      const newClients = [...clients, newClient];
      setClients(newClients);
      saveClients(newClients);
      klantId = newClient.id;
    }

    if (!klantId) return;

    const invoice: Invoice = {
      id: editingInvoice?.id || uid(),
      factuurnummer: editingInvoice?.factuurnummer || nextNumber,
      klantId,
      datum: formDatum,
      betalingstermijn: formTermijn,
      vervaldatum: formVervaldatum,
      lines: formLines,
      subtotaal: formSubtotaal,
      btw: formBtw,
      totaal: formTotaal,
      status,
      opmerkingen: formOpmerkingen,
    };

    let newInvoices: Invoice[];
    if (editingInvoice) {
      newInvoices = invoices.map((i) => (i.id === editingInvoice.id ? invoice : i));
    } else {
      newInvoices = [...invoices, invoice];
    }

    persist(newInvoices);
    resetForm();
    setView('list');
  };

  const deleteInvoice = (id: string) => {
    const newInvoices = invoices.filter((i) => i.id !== id);
    persist(newInvoices);
  };

  const updateStatus = (id: string, status: InvoiceStatus) => {
    const newInvoices = invoices.map((i) => (i.id === id ? { ...i, status } : i));
    persist(newInvoices);
  };

  const openPreview = (invoice: Invoice) => {
    setPreviewInvoice(invoice);
    setView('preview');
  };

  const openEdit = (invoice: Invoice) => {
    setEditingInvoice(invoice);
    setFormKlantId(invoice.klantId);
    setFormNewClient(false);
    setFormLines(invoice.lines);
    setFormDatum(invoice.datum);
    setFormTermijn(invoice.betalingstermijn);
    setFormOpmerkingen(invoice.opmerkingen);
    setView('create');
  };

  if (!mounted) return null;

  // ── Preview view ──────────────────────────────────────────────────────────

  if (view === 'preview' && previewInvoice) {
    const client = getClient(previewInvoice.klantId);
    return (
      <div className="min-h-dvh bg-muted">
        {/* Toolbar */}
        <div className="bg-background border-b border-border px-4 py-3 flex items-center justify-between print:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setPreviewInvoice(null);
              setView('list');
            }}
          >
            <ArrowLeftIcon className="size-4 mr-1" />
            Terug
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <PrinterIcon className="size-4 mr-1" />
              Download PDF
            </Button>
            <Button size="sm" onClick={() => alert('E-mail functionaliteit wordt binnenkort toegevoegd.')}>
              <MailIcon className="size-4 mr-1" />
              Verstuur per email
            </Button>
          </div>
        </div>

        {/* Invoice */}
        <div className="max-w-[800px] mx-auto my-8 bg-white border border-border shadow-sm print:shadow-none print:border-none print:my-0">
          <div className="p-10">
            {/* Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <h1 className="text-xl font-bold text-foreground">{COMPANY.naam}</h1>
                <p className="text-sm text-muted-foreground mt-1">{COMPANY.adres}</p>
                <p className="text-sm text-muted-foreground">{COMPANY.postcode}</p>
                <div className="mt-3 text-xs text-muted-foreground space-y-0.5">
                  <p>KvK: {COMPANY.kvk}</p>
                  <p>BTW: {COMPANY.btw}</p>
                  <p>IBAN: {COMPANY.iban}</p>
                </div>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold text-primary">FACTUUR</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {previewInvoice.factuurnummer}
                </p>
              </div>
            </div>

            {/* Client + dates */}
            <div className="flex justify-between mb-8">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  Factuur aan
                </p>
                {client && (
                  <>
                    <p className="font-medium">{client.bedrijfsnaam}</p>
                    <p className="text-sm text-muted-foreground">
                      t.a.v. {client.contactpersoon}
                    </p>
                    <p className="text-sm text-muted-foreground">{client.adres}</p>
                    {client.kvk && (
                      <p className="text-xs text-muted-foreground mt-1">
                        KvK: {client.kvk}
                      </p>
                    )}
                    {client.btwNummer && (
                      <p className="text-xs text-muted-foreground">
                        BTW: {client.btwNummer}
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="text-right text-sm">
                <div className="mb-1">
                  <span className="text-muted-foreground">Factuurdatum: </span>
                  <span>{formatDate(previewInvoice.datum)}</span>
                </div>
                <div className="mb-1">
                  <span className="text-muted-foreground">Vervaldatum: </span>
                  <span>{formatDate(previewInvoice.vervaldatum)}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Betalingstermijn: </span>
                  <span>{previewInvoice.betalingstermijn} dagen</span>
                </div>
              </div>
            </div>

            {/* Lines table */}
            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="border-b-2 border-foreground/10">
                  <th className="text-left py-2 font-medium">Omschrijving</th>
                  <th className="text-right py-2 font-medium w-20">Uren</th>
                  <th className="text-right py-2 font-medium w-24">Tarief</th>
                  <th className="text-right py-2 font-medium w-28">Bedrag</th>
                </tr>
              </thead>
              <tbody>
                {previewInvoice.lines.map((line) => (
                  <tr key={line.id} className="border-b border-border">
                    <td className="py-2">{line.omschrijving}</td>
                    <td className="text-right py-2">{line.uren}</td>
                    <td className="text-right py-2">{formatCurrency(line.uurtarief)}</td>
                    <td className="text-right py-2">{formatCurrency(line.bedrag)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between py-1 text-sm">
                  <span className="text-muted-foreground">Subtotaal</span>
                  <span>{formatCurrency(previewInvoice.subtotaal)}</span>
                </div>
                <div className="flex justify-between py-1 text-sm">
                  <span className="text-muted-foreground">BTW 21%</span>
                  <span>{formatCurrency(previewInvoice.btw)}</span>
                </div>
                <Separator className="my-1" />
                <div className="flex justify-between py-1 font-bold">
                  <span>Totaal</span>
                  <span>{formatCurrency(previewInvoice.totaal)}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            {previewInvoice.opmerkingen && (
              <div className="mt-8 pt-4 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  Opmerkingen
                </p>
                <p className="text-sm text-muted-foreground">
                  {previewInvoice.opmerkingen}
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-10 pt-4 border-t border-border text-center text-xs text-muted-foreground">
              <p>
                Gelieve het bedrag over te maken naar {COMPANY.iban} o.v.v.{' '}
                {previewInvoice.factuurnummer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Create / edit view ────────────────────────────────────────────────────

  if (view === 'create') {
    return (
      <div className="min-h-dvh bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  resetForm();
                  setView('list');
                }}
              >
                <ArrowLeftIcon className="size-4 mr-1" />
                Terug
              </Button>
              <h1 className="text-lg font-bold">
                {editingInvoice ? 'Factuur bewerken' : 'Nieuwe factuur'}
              </h1>
            </div>
            <span className="text-sm text-muted-foreground">
              {editingInvoice?.factuurnummer || nextNumber}
            </span>
          </div>

          {/* Client section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Klant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    Selecteer klant
                  </label>
                  <Select
                    value={formKlantId}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === '__new__') {
                        setFormNewClient(true);
                        setFormKlantId('');
                      } else {
                        setFormNewClient(false);
                        setFormKlantId(val);
                      }
                    }}
                  >
                    <option value="">-- Kies klant --</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.bedrijfsnaam}
                      </option>
                    ))}
                    <option value="__new__">+ Nieuwe klant</option>
                  </Select>
                </div>
              </div>

              {formNewClient && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      Bedrijfsnaam *
                    </label>
                    <Input
                      value={formClient.bedrijfsnaam}
                      onChange={(e) =>
                        setFormClient((p) => ({ ...p, bedrijfsnaam: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      Contactpersoon
                    </label>
                    <Input
                      value={formClient.contactpersoon}
                      onChange={(e) =>
                        setFormClient((p) => ({ ...p, contactpersoon: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      value={formClient.email}
                      onChange={(e) =>
                        setFormClient((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      Adres
                    </label>
                    <Input
                      value={formClient.adres}
                      onChange={(e) =>
                        setFormClient((p) => ({ ...p, adres: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      KvK
                    </label>
                    <Input
                      value={formClient.kvk}
                      onChange={(e) =>
                        setFormClient((p) => ({ ...p, kvk: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                      BTW-nummer
                    </label>
                    <Input
                      value={formClient.btwNummer}
                      onChange={(e) =>
                        setFormClient((p) => ({ ...p, btwNummer: e.target.value }))
                      }
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Invoice lines */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Factuurregels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Header row (desktop only) */}
                <div className="hidden sm:grid sm:grid-cols-[1fr_80px_100px_100px_36px] gap-2 text-xs font-medium text-muted-foreground">
                  <span>Omschrijving</span>
                  <span className="text-right">Uren</span>
                  <span className="text-right">Uurtarief</span>
                  <span className="text-right">Bedrag</span>
                  <span />
                </div>

                {formLines.map((line) => (
                  <div
                    key={line.id}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_80px_100px_100px_36px] gap-2 items-center"
                  >
                    <Input
                      placeholder="Omschrijving"
                      value={line.omschrijving}
                      onChange={(e) => updateLine(line.id, 'omschrijving', e.target.value)}
                    />
                    <Input
                      type="number"
                      step="0.5"
                      min="0"
                      placeholder="Uren"
                      value={line.uren || ''}
                      onChange={(e) =>
                        updateLine(line.id, 'uren', parseFloat(e.target.value) || 0)
                      }
                    />
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="Tarief"
                      value={line.uurtarief || ''}
                      onChange={(e) =>
                        updateLine(line.id, 'uurtarief', parseFloat(e.target.value) || 0)
                      }
                    />
                    <div className="text-right text-sm font-medium py-1.5">
                      {formatCurrency(line.bedrag)}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => removeLine(line.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2Icon className="size-3.5" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="mt-3" onClick={addLine}>
                <PlusIcon className="size-3.5 mr-1" />
                Regel toevoegen
              </Button>

              {/* Totals */}
              <div className="mt-6 flex justify-end">
                <div className="w-64 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotaal</span>
                    <span>{formatCurrency(formSubtotaal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">BTW 21%</span>
                    <span>{formatCurrency(formBtw)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-sm">
                    <span>Totaal incl. BTW</span>
                    <span>{formatCurrency(formTotaal)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    Factuurdatum
                  </label>
                  <Input
                    type="date"
                    value={formDatum}
                    onChange={(e) => setFormDatum(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    Betalingstermijn
                  </label>
                  <Select
                    value={formTermijn}
                    onChange={(e) => setFormTermijn(Number(e.target.value))}
                  >
                    <option value={14}>14 dagen</option>
                    <option value={30}>30 dagen</option>
                    <option value={60}>60 dagen</option>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">
                    Vervaldatum
                  </label>
                  <Input type="date" value={formVervaldatum} disabled />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">
                  Opmerkingen / notities
                </label>
                <Textarea
                  value={formOpmerkingen}
                  onChange={(e) => setFormOpmerkingen(e.target.value)}
                  placeholder="Eventuele opmerkingen..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => {
                resetForm();
                setView('list');
              }}
            >
              Annuleren
            </Button>
            <Button variant="secondary" onClick={() => handleSave('concept')}>
              Opslaan als concept
            </Button>
            <Button onClick={() => handleSave('verzonden')}>
              Opslaan &amp; Verstuur
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ── List view (default) ───────────────────────────────────────────────────

  return (
    <div className="min-h-dvh bg-background">
      {/* Top nav */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              InteractAgent
            </Link>
            <Separator orientation="vertical" className="h-5" />
            <span className="text-sm font-medium text-primary">Facturen</span>
          </div>
          {/* Client database dialog */}
          <Dialog open={clientDialogOpen} onOpenChange={setClientDialogOpen}>
            <DialogTrigger
              render={
                <Button variant="ghost" size="sm">
                  Klanten
                </Button>
              }
            />
            <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Klantendatabase</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                {clients.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Geen klanten opgeslagen.</p>
                ) : (
                  clients.map((c) => (
                    <div
                      key={c.id}
                      className="border border-border rounded-md p-3 text-sm"
                    >
                      <div className="font-medium">{c.bedrijfsnaam}</div>
                      <div className="text-muted-foreground">{c.contactpersoon}</div>
                      <div className="text-muted-foreground">{c.email}</div>
                      <div className="text-muted-foreground text-xs mt-1">
                        {c.adres}
                        {c.kvk && ` | KvK: ${c.kvk}`}
                        {c.btwNummer && ` | BTW: ${c.btwNummer}`}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Summary bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-foreground">Facturen</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Openstaand bedrag:{' '}
              <span className="font-semibold text-foreground">
                {formatCurrency(outstanding)}
              </span>
            </p>
          </div>
          <Button
            onClick={() => {
              resetForm();
              setView('create');
            }}
          >
            <PlusIcon className="size-4 mr-1" />
            Nieuwe factuur
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {(['all', 'concept', 'verzonden', 'betaald'] as const).map((s) => (
            <Button
              key={s}
              variant={statusFilter === s ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter(s)}
            >
              {s === 'all' ? 'Alles' : s.charAt(0).toUpperCase() + s.slice(1)}
              {s !== 'all' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({invoices.filter((i) => i.status === s).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Invoice table */}
        {filteredInvoices.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileTextIcon className="size-10 mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-sm text-muted-foreground">Geen facturen gevonden.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="border border-border rounded-md overflow-hidden">
            {/* Table header */}
            <div className="hidden sm:grid sm:grid-cols-[1fr_1fr_100px_120px_100px_80px] gap-2 px-4 py-2 bg-muted/50 text-xs font-medium text-muted-foreground border-b border-border">
              <span>Factuurnummer</span>
              <span>Klant</span>
              <span>Datum</span>
              <span className="text-right">Bedrag (incl BTW)</span>
              <span>Status</span>
              <span />
            </div>

            {/* Rows */}
            {filteredInvoices.map((inv) => {
              const client = getClient(inv.klantId);
              return (
                <div
                  key={inv.id}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_100px_120px_100px_80px] gap-2 px-4 py-3 border-b border-border last:border-b-0 items-center hover:bg-muted/30 transition-colors"
                >
                  <div>
                    <span className="font-medium text-sm">{inv.factuurnummer}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {client?.bedrijfsnaam || 'Onbekend'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(inv.datum)}
                  </div>
                  <div className="text-sm font-medium text-right">
                    {formatCurrency(inv.totaal)}
                  </div>
                  <div>
                    <StatusBadge status={inv.status} />
                  </div>
                  <div className="flex gap-1 justify-end">
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => openPreview(inv)}
                      title="Bekijk factuur"
                    >
                      <EyeIcon className="size-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => openEdit(inv)}
                      title="Bewerk factuur"
                    >
                      <FileTextIcon className="size-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => deleteInvoice(inv.id)}
                      title="Verwijder"
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2Icon className="size-3.5" />
                    </Button>
                  </div>

                  {/* Mobile: extra info */}
                  <div className="sm:hidden flex items-center justify-between gap-2 text-xs text-muted-foreground -mt-1">
                    <span>{formatDate(inv.datum)}</span>
                    <span className="font-medium text-foreground">
                      {formatCurrency(inv.totaal)}
                    </span>
                    <StatusBadge status={inv.status} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick status change buttons for each invoice */}
        {filteredInvoices.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Status wijzigen
            </p>
            <div className="space-y-2">
              {filteredInvoices
                .filter((i) => i.status !== 'betaald')
                .map((inv) => (
                  <div
                    key={inv.id}
                    className="flex items-center justify-between gap-2 text-sm border border-border rounded-md px-3 py-2"
                  >
                    <span className="font-medium">
                      {inv.factuurnummer}{' '}
                      <span className="text-muted-foreground font-normal">
                        — {getClient(inv.klantId)?.bedrijfsnaam}
                      </span>
                    </span>
                    <div className="flex gap-2">
                      {inv.status === 'concept' && (
                        <Button
                          variant="outline"
                          size="xs"
                          onClick={() => updateStatus(inv.id, 'verzonden')}
                        >
                          Markeer als verzonden
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="xs"
                        onClick={() => updateStatus(inv.id, 'betaald')}
                        className="text-green-700 border-green-200 hover:bg-green-50"
                      >
                        Markeer als betaald
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
