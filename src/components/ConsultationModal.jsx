import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';

const RESIDENCE_OPTIONS = [
  'Canadian Citizen',
  'Permanent Resident',
  'Protected Person',
  'Other',
];

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    program: '', residenceStatus: '', additionalInfo: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch('https://formspree.io/f/mkoegzag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        'First Name': form.firstName,
        'Last Name': form.lastName,
        'Phone': form.phone,
        'Email': form.email,
        'Program of Interest': form.program,
        'Residence Status': form.residenceStatus,
        'Additional Information': form.additionalInfo,
      }),
    });
    setSubmitting(false);
    setSuccess(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSuccess(false); setForm({ firstName: '', lastName: '', phone: '', email: '', program: '', residenceStatus: '', additionalInfo: '' }); }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-foreground">Book a Consultation</DialogTitle>
          <p className="text-muted-foreground text-sm font-body">Fill in your details and we'll be in touch shortly.</p>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center py-10 gap-4 text-center">
            <CheckCircle className="w-14 h-14 text-green-500" />
            <h3 className="font-heading text-xl text-foreground">Request Submitted!</h3>
            <p className="text-muted-foreground font-body text-sm max-w-xs">
              Thank you! A Gran Consulting advisor will reach out to you within 1–2 business days.
            </p>
            <Button onClick={handleClose} className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="font-body text-sm">First Name *</Label>
                <Input required value={form.firstName} onChange={set('firstName')} placeholder="Jane" />
              </div>
              <div className="space-y-1.5">
                <Label className="font-body text-sm">Last Name *</Label>
                <Input required value={form.lastName} onChange={set('lastName')} placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="font-body text-sm">Phone Number *</Label>
              <Input required type="tel" value={form.phone} onChange={set('phone')} placeholder="(403) 000-0000" />
            </div>

            <div className="space-y-1.5">
              <Label className="font-body text-sm">Email Address *</Label>
              <Input required type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" />
            </div>

            <div className="space-y-1.5">
              <Label className="font-body text-sm">Program of Interest *</Label>
              <Input required value={form.program} onChange={set('program')} placeholder="e.g. Health Care Aide, Business Admin…" />
            </div>

            <div className="space-y-1.5">
              <Label className="font-body text-sm">Residence Status *</Label>
              <Select required value={form.residenceStatus} onValueChange={(v) => setForm(f => ({ ...f, residenceStatus: v }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
                <SelectContent>
                  {RESIDENCE_OPTIONS.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="font-body text-sm">Additional Information</Label>
              <Textarea
                value={form.additionalInfo}
                onChange={set('additionalInfo')}
                placeholder="Any additional details you'd like to share…"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              disabled={submitting || !form.residenceStatus}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body rounded-full py-5 text-sm"
            >
              {submitting ? 'Submitting…' : 'Submit Consultation Request'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}