import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

const COOPERATION_TYPES = [
  { value: 'zlecenie', label: 'Zlecenie projektu' },
  { value: 'partnerstwo', label: 'Partnerstwo technologiczne' },
  { value: 'produkt', label: 'Współpraca przy produkcie' },
]

interface FormValues {
  fullName: string
  company: string
  email: string
  cooperationType: string
  description: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const INITIAL_VALUES: FormValues = {
  fullName: '',
  company: '',
  email: '',
  cooperationType: '',
  description: '',
  consent: false,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldControl =
  'rounded-md border border-border bg-background px-3 py-2.5 text-[15px] text-heading focus-visible:outline-offset-1 aria-[invalid=true]:border-red-600'

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Podaj imię i nazwisko.'
  }

  if (values.company.trim().length < 2) {
    errors.company = 'Podaj nazwę firmy.'
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Podaj prawidłowy adres e-mail.'
  }

  if (!values.cooperationType) {
    errors.cooperationType = 'Wybierz rodzaj współpracy.'
  }

  if (values.description.trim().length < 20) {
    errors.description = 'Opis musi mieć co najmniej 20 znaków.'
  }

  if (!values.consent) {
    errors.consent = 'Zgoda jest wymagana, aby mogliśmy odpowiedzieć na zapytanie.'
  }

  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  const errors = validate(values)

  function handleBlur(field: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTouched({
      fullName: true,
      company: true,
      email: true,
      cooperationType: true,
      description: true,
      consent: true,
    })

    if (Object.keys(validate(values)).length > 0) {
      return
    }

    setStatus('submitting')

    // TODO: podłączyć backend — na razie formularz jest stubem i niczego nie wysyła.
    await new Promise((resolve) => setTimeout(resolve, 900))

    setStatus('submitted')
  }

  if (status === 'submitted') {
    return (
      <div
        className="max-w-[560px] rounded-[10px] border border-border bg-surface p-8 text-left"
        role="status"
      >
        <h2>Dziękujemy za zgłoszenie</h2>
        <p className="mt-3 leading-[150%] text-foreground">
          Otrzymaliśmy Twoje zapytanie. Odpowiemy na podany adres e-mail w
          wymienionym poniżej czasie odpowiedzi.
        </p>
      </div>
    )
  }

  return (
    <form className="flex max-w-[560px] flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="fullName" className="text-sm font-medium text-heading">
          Imię i nazwisko
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          className={fieldControl}
          value={values.fullName}
          onChange={(event) => updateField('fullName', event.target.value)}
          onBlur={() => handleBlur('fullName')}
          aria-invalid={Boolean(touched.fullName && errors.fullName)}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {touched.fullName && errors.fullName && (
          <p id="fullName-error" className="text-[13px] text-red-600">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="company" className="text-sm font-medium text-heading">
          Firma
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={fieldControl}
          value={values.company}
          onChange={(event) => updateField('company', event.target.value)}
          onBlur={() => handleBlur('company')}
          aria-invalid={Boolean(touched.company && errors.company)}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {touched.company && errors.company && (
          <p id="company-error" className="text-[13px] text-red-600">
            {errors.company}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="email" className="text-sm font-medium text-heading">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldControl}
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
          onBlur={() => handleBlur('email')}
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <p id="email-error" className="text-[13px] text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="cooperationType" className="text-sm font-medium text-heading">
          Rodzaj współpracy
        </label>
        <select
          id="cooperationType"
          name="cooperationType"
          className={fieldControl}
          value={values.cooperationType}
          onChange={(event) => updateField('cooperationType', event.target.value)}
          onBlur={() => handleBlur('cooperationType')}
          aria-invalid={Boolean(touched.cooperationType && errors.cooperationType)}
          aria-describedby={errors.cooperationType ? 'cooperationType-error' : undefined}
        >
          <option value="">Wybierz rodzaj współpracy</option>
          {COOPERATION_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {touched.cooperationType && errors.cooperationType && (
          <p id="cooperationType-error" className="text-[13px] text-red-600">
            {errors.cooperationType}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="description" className="text-sm font-medium text-heading">
          Opis projektu
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          className={fieldControl}
          value={values.description}
          onChange={(event) => updateField('description', event.target.value)}
          onBlur={() => handleBlur('description')}
          aria-invalid={Boolean(touched.description && errors.description)}
          aria-describedby={errors.description ? 'description-error' : undefined}
        />
        {touched.description && errors.description && (
          <p id="description-error" className="text-[13px] text-red-600">
            {errors.description}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2.5 text-left">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1"
          checked={values.consent}
          onChange={(event) => updateField('consent', event.target.checked)}
          onBlur={() => handleBlur('consent')}
          aria-invalid={Boolean(touched.consent && errors.consent)}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
        />
        <label htmlFor="consent" className="text-sm text-foreground">
          Zgadzam się na kontakt w sprawie niniejszego zapytania zgodnie z{' '}
          <Link to="/informacje#polityka-prywatnosci" className="text-accent">
            polityką prywatności
          </Link>
          .
        </label>
      </div>
      {touched.consent && errors.consent && (
        <p id="consent-error" className="text-[13px] text-red-600">
          {errors.consent}
        </p>
      )}

      <button
        type="submit"
        className="cursor-pointer self-start rounded-md border border-accent bg-accent px-6 py-[11px] text-[15px] font-medium text-on-accent disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </button>
    </form>
  )
}
