// "use client";

// import { signUpAction } from "@/app/actions";
// import { FormMessage, Message } from "@/components/form-message";
// import { SubmitButton } from "@/components/submit-button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { CalendarIcon } from "lucide-react";
// import { format } from "date-fns";
// import Link from "next/link";
// import { SmtpMessage } from "../smtp-message";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { cn } from "@/lib/utils";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage as FormValidationMessage,
// } from "@/components/ui/form";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const SignupSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   id: z.string().min(1, "ID is required"),
//   dateOfBirth: z.date({
//     required_error: "Date of birth is required",
//   }),
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// export default function Signup(props: {
//   searchParams: Message;
// }) {
//   const form = useForm<z.infer<typeof SignupSchema>>({
//     resolver: zodResolver(SignupSchema),
//     defaultValues: {
//       name: "",
//       id: "",
//       email: "",
//       password: "",
//     },
//   });

//   if ("message" in props.searchParams) {
//     return (
//       <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
//         <FormMessage message={props.searchParams} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-4 w-full">
//     <Card className="max-w-md w-full">
// <CardHeader>
//   <CardTitle>SignUp</CardTitle>
//   </CardHeader>
//   <CardContent><Form {...form}>
//         <form 
//           className="flex flex-col m-2"
//           action={async (formData: FormData) => {
//             // Add the validated date to formData before submission
//             const dateOfBirth = form.getValues("dateOfBirth");
//             if (dateOfBirth) {
//               formData.set("dateOfBirth", dateOfBirth.toISOString());
//             }
//             await signUpAction(formData);
//           }}
//         >
          
          
//           <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="John Doe" {...field} />
//                   </FormControl>
//                   <FormValidationMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="id"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>ID</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your ID" {...field} />
//                   </FormControl>
//                   <FormValidationMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="dateOfBirth"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
//                   <FormLabel>Date of Birth</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={"outline"}
//                           className={cn(
//                             "w-full pl-3 text-left font-normal",
//                             !field.value && "text-muted-foreground"
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, "PPP")
//                           ) : (
//                             <span>Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date("1900-01-01")
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormValidationMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="you@example.com" {...field} />
//                   </FormControl>
//                   <FormValidationMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input 
//                       type="password" 
//                       placeholder="Your password"
//                       {...field} 
//                     />
//                   </FormControl>
//                   <FormValidationMessage />
//                 </FormItem>
//               )}
//             />

//             <SubmitButton formAction={undefined} pendingText="Signing up...">
//               Sign up
//             </SubmitButton>
//             <FormMessage message={props.searchParams} />
//           </div>
//         </form>
//       </Form></CardContent>

//     </Card>
      
//       <SmtpMessage />
//     </div>
//   );
// }

"use client";

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage as FormValidationMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

const SignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  id: z.string().min(1, "ID is required"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Signup({ searchParams }: {
  searchParams: Message;
}) {
  
  const search = useSearchParams()
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      id: "",
      email: "",
      password: "",
    },
  });

  // Check if there's any message type in searchParams
  const hasMessage = search.get('message')
  
  if (hasMessage) {
    return (
      <div className="w-full h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <FormMessage message={searchParams} />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <Card className="w-full shadow-lg">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">Create your account to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form 
                className="space-y-4"
                action={async (formData: FormData) => {
                  // Add the validated date to formData before submission
                  const dateOfBirth = form.getValues("dateOfBirth");
                  if (dateOfBirth) {
                    formData.set("dateOfBirth", dateOfBirth.toISOString());
                  }
                  await signUpAction(formData);
                }}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormValidationMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Your ID" {...field} />
                      </FormControl>
                      <FormValidationMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormValidationMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormValidationMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="Your password"
                          {...field} 
                        />
                      </FormControl>
                      <FormValidationMessage />
                    </FormItem>
                  )}
                />

                <SubmitButton formAction={undefined} pendingText="Signing up...">
                  Sign up
                </SubmitButton>
                <FormMessage message={searchParams} />
              </form>
            </Form>
          </CardContent>
        </Card>
        <SmtpMessage />
      </div>
    </div>
  );
}