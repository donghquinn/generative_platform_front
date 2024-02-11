import { Alert, Button, Card, Fieldset, Group, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, isEmail, matchesField, useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useState } from "react";
import { singupRequest } from "../../src/user/signup.lib";

// Not Completed Compoment
function SignUp()
{
    const [ email, setEmail ] = useState<string>();
    const [ password, setPassword ] = useState<string>();
    const [ name, setName ] = useState<string>();
    const [ resCode, setResCode ] = useState( "200" );

    const router = useRouter();

      const validateForm = useForm({
    initialValues: {
              email: '',
        name: "",
      password: "",
      confirmPassword: '',
    },

    validate: {
    email: isEmail(),
    name: hasLength({min: 1, max: 12}),
      password: hasLength( { min: 5, max: 12 } ),
      confirmPassword: matchesField(
        "password",
        "Passwords are not same"
      )
    },
      } );
    
    const onChangePassword = ( e ) =>
    {
        setPassword( e.target.value );
    }

        const onChangeEmail = ( e ) =>
    {
        setEmail( e.target.value );
        }
    
        const onChangeName = ( e ) =>
    {
        setName( e.target.value );
        }
    
    const signup = async () =>
    {
        const response = await singupRequest( email, password, name );

        setResCode( response.resCode );

        if ( resCode === "200" )
        {
            alert( "Signup Success" );

            router.push("/")
        }
    }


  if ( resCode !== "200" ) {
    return (
      <Alert variant="light" color="red" title="Alert title">
        Signin Failed. Please Try Again.
      </Alert>
    );
  }
  
    return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>

          {/* {visible &&
            <Overlay color="#000" backgroundOpacity={0.85}>
             <div className="flex flex-col space-y-2 px-2 mt-5">
            <div className="flex flex-row justify-center">
                  <Text c="white"> It is on Work in Progress. </Text>

                </div>
                <div className="flex flex-row justify-center">
                                    <Text c="white">Thank you.</Text>
                            </div>
              </div>
            </Overlay>
        } */}
        
        <Card.Section component="a" href="https://mantine.dev/" />

        <Fieldset legend="Signin">
          <TextInput label="Email" placeholder="Email" onChange={onChangeEmail} {...validateForm.getInputProps( "email" )} />
          <TextInput label="Name" placeholder="Name" onChange={onChangeName} {...validateForm.getInputProps( "name" )} />

          <PasswordInput label="Password" placeholder="Password" mt="md" security="password" onChange={onChangePassword} {...validateForm.getInputProps( "password" )} />
          <PasswordInput label="confirm Password" placeholder="Password" mt="md" security="password" {...validateForm.getInputProps( "confirmPassword" )} />

          <Group justify="flex-end" mt="md">
            <Button onClick={signup}>Submit</Button>
          </Group>
        </Fieldset>
      </Card>
    </>
  );
}

export default SignUp;