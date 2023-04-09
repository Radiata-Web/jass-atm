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
} from "@chakra-ui/react"

import { useState } from "react"

const initValues = { name: "", email: "", phone: "", message: "" }
const initState = { values: initValues }

const ContactForm = () => {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})
  const { values, isLoading, error } = state

  // See if field was touched
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }))

  // Handle form input changes
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  // Handle form submission
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))

    try {
      // Send form data
      await sendContactForm(values)

      // Reset form
      setTouched({})
      setState(initState)

      // Show success toast
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        position: "top",
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
    }
  }

  return (
    <Box
      mt={{ base: 12, md: 0 }}
      padding={8}
      shadow={{ base: "md", md: "xl" }}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.100"
    >
      {/* Heading */}
      <Heading
        display={{ base: "block", md: "none" }}
        as="h3"
        mb={4}
      >
        Contact us
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 4, md: 8 }}
      >
        {/* Full Name */}
        <FormControl
          id="name"
          isRequired
          isInvalid={touched.name && !values.name}
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

        {/* Email Address */}
        <FormControl
          id="email"
          isRequired
          isInvalid={touched.email && !values.email}
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
          {/* Error handling message */}
          <FormErrorMessage>Please enter a valid email.</FormErrorMessage>
        </FormControl>

        {/* Phone Number */}
        <FormControl
          id="phone"
          isInvalid={
            (touched.phone && !values.phone) || values.phone.length > 10
          }
          isRequired
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

      {/* Message */}
      <FormControl
        id="message"
        mt={4}
        isRequired
        isInvalid={touched.message && !values.message}
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

      {/* Submit Button */}
      <Stack
        spacing={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Button
          type="submit"
          mt={6}
          colorScheme="brand"
          variant="solid"
          size="lg"
          isDisabled={
            !values.name || !values.email || !values.phone || !values.message
          }
          width={{ base: "100%", md: "auto" }}
          isLoading={values.isLoading}
          loadingText="Submitting"
          onClick={onSubmit}
        >
          Send message
        </Button>

        {!error && (
          <Box>
            <Text
              color="gray.500"
              mt={{ base: 0, md: 9 }}
              textAlign={{ base: "center", md: "left" }}
            >
              Your information is not shared with any third parties.
            </Text>
          </Box>
        )}

        {/* Error handling message */}
        {error && (
          <Box>
            <Text
              color="red.300"
              mt={{ base: 0, md: 9 }}
              textAlign={{ base: "center", md: "left" }}
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
