"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  SignInWithFacebookButton,
  SignInWithGithubButton,
  SignInWithGoogleButton,
} from "@/features/auth/components";

const Form = () => {
  return (
    <>
    <Tabs defaultValue="register" className="md:w-8/12 lg:w-6/12 xl:w-6/12">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="register">Register</TabsTrigger>
        <TabsTrigger value="login">Log in</TabsTrigger>
      </TabsList>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>
              Before continue, please create an account !
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@email.com" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="********" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="retry-password">Confirm Password</Label>
              <Input id="retry-password" placeholder="********" type="password" />
            </div>
            <div className="flex items-center space-y-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </label>
          </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button>Sign Up</Button>
            <a href="">Already have an account ?</a>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              To continue shopping, please sign in to your account !
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@email.com" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="********" type="password" />
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button>Sign In</Button>
            <a href="">Forgot password ?</a>
          </CardFooter>
        </Card>
      </TabsContent>
      <div className="mt-4 grid space-y-4 text-center">Or</div>
      <div className="mt-4 grid space-y-4">
        
        <SignInWithGithubButton />
        <SignInWithGoogleButton />
        <SignInWithFacebookButton />
      </div>
    </Tabs>
    </>
  )
}

export default Form
