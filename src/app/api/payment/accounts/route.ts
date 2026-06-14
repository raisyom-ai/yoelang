import { NextResponse } from 'next/server'

/**
 * GET /api/payment/accounts
 *
 * Returns the owner's payment receiving accounts (phone numbers, instructions).
 * This is a public endpoint — anyone can see where to send money.
 * The numbers are stored server-side so they can be updated without redeploying.
 */

interface PaymentAccount {
  method: string
  label: string
  number: string
  displayNumber: string
  icon: string
  color: string
  bg: string
  borderColor: string
  ussdCode?: string
  instructions: string[]
}

// Payment accounts are defined server-side.
// Update these when the owner's numbers change.
const PAYMENT_ACCOUNTS: PaymentAccount[] = [
  {
    method: 'orange_money',
    label: 'Orange Money',
    number: process.env.PAYMENT_ORANGE_MONEY_NUMBER || '0777530173',
    displayNumber: process.env.PAYMENT_ORANGE_MONEY_DISPLAY || '077 75 30 17 3',
    icon: '🟠',
    color: 'text-orange-600',
    bg: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    ussdCode: '#144#',
    instructions: [
      'Composez #144# sur votre téléphone',
      'Sélectionnez "Transfert d\'argent"',
      'Entrez le numéro du destinataire',
      'Saisissez le montant',
      'Confirmez avec votre code PIN',
      'Notez le code de transaction reçu par SMS',
    ],
  },
  {
    method: 'wave',
    label: 'Wave',
    number: process.env.PAYMENT_WAVE_NUMBER || '0777530173',
    displayNumber: process.env.PAYMENT_WAVE_DISPLAY || '077 75 30 17 3',
    icon: '🔵',
    color: 'text-blue-600',
    bg: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    instructions: [
      'Ouvrez l\'application Wave',
      'Appuyez sur "Envoyer"',
      'Sélectionnez le contact ou entrez le numéro',
      'Saisissez le montant',
      'Confirmez le transfert',
      'Notez la référence de transaction',
    ],
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    accounts: PAYMENT_ACCOUNTS,
  })
}
