import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Button,
  Error,
  FormControl,
  Hint,
  Input,
  TextArea,
  SectionHeader,
  ExternalLink,
} from 'src/components'
import { LINKS } from './Links'

type TypedArrays = {
  [key: string]: {
    key: string
    getInstance: (length: number) => any
  }
}

const TYPED_ARRAYS: TypedArrays = {
  Uint32Array: {
    key: 'Uint32Array',
    getInstance: (length: number) => new Uint32Array(length),
  },
  Int8Array: {
    key: 'Int8Array',
    getInstance: (length: number) => new Int8Array(length),
  },
  Uint8Array: {
    key: 'Uint8Array',
    getInstance: (length: number) => new Uint8Array(length),
  },
  Int16Array: {
    key: 'Int16Array',
    getInstance: (length: number) => new Int16Array(length),
  },
  Uint16Array: {
    key: 'Uint16Array',
    getInstance: (length: number) => new Uint16Array(length),
  },
  Int32Array: {
    key: 'Int32Array',
    getInstance: (length: number) => new Int32Array(length),
  },
}

const MAX_TYPED_ARRAY_LENGTH = 10000

export const GetRandomValues: React.FC = () => {
  const { t } = useTranslation('WebCrypto', {
    keyPrefix: 'getRandomValues',
  })

  const { t: t1 } = useTranslation('Common')

  const [typedArrayLength, setTypedArrayLength] = useState('1')

  const [selectedTypedArray, setSelectedTypedArray] = useState(
    TYPED_ARRAYS.Uint32Array.key,
  )

  const isTypedArrayLengthInvalid = useMemo(() => {
    if (!typedArrayLength) return true
    const arrayLength = Number(typedArrayLength)
    const isNaN = Number.isNaN(arrayLength)
    const isZero = arrayLength === 0
    const isTooBig = arrayLength > MAX_TYPED_ARRAY_LENGTH
    return isNaN || isZero || isTooBig
  }, [typedArrayLength])

  const result: string = useMemo(() => {
    const typedArray = TYPED_ARRAYS[selectedTypedArray]
    if (!typedArray) return ''
    const arrayLength = isTypedArrayLengthInvalid ? 1 : Number(typedArrayLength)
    return window.crypto.getRandomValues(typedArray.getInstance(arrayLength))
  }, [isTypedArrayLengthInvalid, selectedTypedArray, typedArrayLength])

  return (
    <div>
      <SectionHeader
        className="mb-8"
        titleClassName="break-all"
        title={t('title')}
        anchor="getRandomValues"
        subtitle={
          <>
            <span>{t('subtitle')}</span>
            &nbsp;
            <ExternalLink href={LINKS.GET_RANDOM_VALUES}>
              {t1('knowMoreAbout')}
            </ExternalLink>
            <span>.</span>
          </>
        }
      />

      <div className="flex flex-wrap items-stretch flex-col md:space-x-8 md:flex-row">
        <div className="flex-1 mb-2">
          <FormControl
            className="mb-4"
            label={
              <label htmlFor="typedArrayLength">{t('typedArrayLength')}</label>
            }
            hint={
              <Hint>{t('hint', { min: 1, max: MAX_TYPED_ARRAY_LENGTH })}</Hint>
            }
            error={<Error>{t('invalidLengthError')}</Error>}
            showError={isTypedArrayLengthInvalid}
          >
            <Input
              min={1}
              type="number"
              className="w-full"
              id="typedArrayLength"
              value={typedArrayLength}
              placeholder={t('typedArrayLength')}
              onChange={(e) => setTypedArrayLength(e.target.value)}
            />
          </FormControl>

          <div className="flex items-center flex-wrap">
            {Object.values(TYPED_ARRAYS).map(({ key }) => {
              const isSelected = key === selectedTypedArray

              const selectionClass = isSelected
                ? '!bg-purple-600 dark:hover:bg-purple-600 !text-white'
                : 'dark:hover:!bg-gray-800'

              const handleSelectTypedArray = () => {
                setSelectedTypedArray(key)
              }

              return (
                <Button
                  className={`mr-3 mb-3 ${selectionClass}`}
                  key={key}
                  onClick={handleSelectTypedArray}
                >
                  {key}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="flex-1">
          <TextArea
            className="w-full resize-none"
            value={result}
            rows={7}
            disabled
          />
        </div>
      </div>
    </div>
  )
}
