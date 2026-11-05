import { sendContactForm } from "@/lib/api"
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  Text,
  Stack,
  useToast,
  VisuallyHidden,
} from "@chakra-ui/react"
import { useState, type ChangeEvent, type FormEvent, type FocusEvent } from "react"

type FormValues = {
  name: string
  email: string
  phone: string
  message: string
  "bot-field": string
}

type FormState = {
  values: FormValues
  isLoading?: boolean
  error?: string
}

const initValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  "bot-field": "",
}

const initState: FormState = { values: initValues }

const ContactForm = () => {
  const toast = useToast()
  const [state, setState] = useState<FormState>(initState)
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const { values, isLoading, error } = state

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }))

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: undefined,
    }))

    try {
      await sendContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        position: "top",
      })
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to send message"
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: message,
      }))
    }
  }

  return (
    <Box
      as="form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      mt={{ base: 12, lg: 0 }}
      padding={{ base: 5, sm: 8 }}
      shadow={{ base: "md", md: "xl" }}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.100"
      w="100%"
      minW={0}
      maxW="100%"
    >
      <input type="hidden" name="form-name" value="contact" />

      <VisuallyHidden>
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input
            name="bot-field"
            value={values["bot-field"]}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </VisuallyHidden>

      <Heading display={{ base: "block", lg: "none" }} as="h3" mb={4}>
        Contact us
      </Heading>

      {/* Container-aware columns: stack when the form card is narrow even if the viewport is md+ */}
      <SimpleGrid minChildWidth="14rem" spacing={{ base: 4, md: 6 }}>
        <FormControl
          id="name"
          isRequired
          isInvalid={Boolean(touched.name && !values.name)}
          minW={0}
        >
          <FormLabel fontWeight="bold">Full Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>Please enter your name.</FormErrorMessage>
        </FormControl>

        <FormControl
          id="email"
          isRequired
          isInvalid={Boolean(touched.email && !values.email)}
          minW={0}
        >
          <FormLabel fontWeight="bold">Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>Please enter a valid email.</FormErrorMessage>
        </FormControl>

        <FormControl
          id="phone"
          isInvalid={Boolean(
            (touched.phone && !values.phone) || values.phone.length > 10,
          )}
          isRequired
          minW={0}
        >
          <FormLabel fontWeight="bold">Phone Number</FormLabel>
          <Input
            type="tel"
            name="phone"
            placeholder="8006766838"
            value={values.phone}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage>
            Please enter a valid phone number.
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <FormControl
        id="message"
        mt={4}
        isRequired
        isInvalid={Boolean(touched.message && !values.message)}
        minW={0}
      >
        <FormLabel fontWeight="bold">Message</FormLabel>
        <Textarea
          name="message"
          placeholder="I'm interested in..."
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          errorBorderColor="red.300"
        />
        <FormErrorMessage>Please enter a message.</FormErrorMessage>
      </FormControl>

      <Stack
        mt={6}
        spacing={4}
        direction={{ base: "column", xl: "row" }}
        align={{ base: "stretch", xl: "center" }}
      >
        <Button
          type="submit"
          colorScheme="brand"
          variant="solid"
          size="lg"
          isDisabled={
            !values.name || !values.email || !values.phone || !values.message
          }
          width={{ base: "100%", xl: "auto" }}
          flexShrink={0}
          isLoading={isLoading}
          loadingText="Submitting"
        >
          Send message
        </Button>

        {!error && (
          <Box minW={0}>
            <Text
              color="gray.500"
              textAlign={{ base: "center", xl: "left" }}
            >
              Your information is not shared with any third parties.
            </Text>
          </Box>
        )}

        {error && (
          <Box minW={0}>
            <Text
              color="red.300"
              textAlign={{ base: "center", xl: "left" }}
            >
              {error}
            </Text>
          </Box>
        )}
      </Stack>
    </Box>
  )
}

export default ContactForm
