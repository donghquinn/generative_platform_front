import { useState } from "react";
import { useRecoilState } from "recoil";
import { signinUserEmailRecoil, signinUserUuidRecoil } from "../../src/recoil/login.recoil";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { Button, Card, Fieldset, Group, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";
import { loginRequest } from "../../src/user/login.lib";
import { useRouter } from "next/router";

// Not Completed Components
function LoginComponent ()
{
  const [ email, setEmail ] = useState<string>();
  const [ password, setPassword ] = useState<string>();
  const [ resCode, setResCode ] = useState( "200" );
  const [ globalEmail, setGlobalEmail ] = useRecoilState( signinUserEmailRecoil );
  const [ uuid, setUuid ] = useRecoilState( signinUserUuidRecoil );

  const router = useRouter();

    const validateForm = useForm({
    initialValues: {
      email: '',
      password: "",
    },
    validate: {
        email: isEmail(),
        password: hasLength( { min: 5, max: 12 } ),
    },
    } );
    
      const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = ( e ) => {
    setPassword(e.target.value)
  }
    
    const getUserUuid = async () =>
    {
      const response = await loginRequest( email, password );

      setResCode( response.resCode );

      if ( resCode === "200" )
      {
        alert( "Login Success" );
        setGlobalEmail( email );
        setUuid( response.dataRes.result );
        router.push("/")
      }
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
          
          <Fieldset legend="Login">
            <TextInput label="Email" placeholder="Email" onChange={onChangeEmail} {...validateForm.getInputProps("email")} />
            <PasswordInput label="Password" placeholder="Password" mt="md" onChange={onChangePassword} {...validateForm.getInputProps( "password" )} />

            <Group justify="flex-end" mt="md">
                <Link href="/signin">Click to Signin</Link>
                <Button onClick={getUserUuid}>Submit</Button>
            </Group>
           </Fieldset>
        </Card>
      </>
    )
}

export default LoginComponent;