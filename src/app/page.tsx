"use client"
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validators/auth'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'



const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof registerSchema>;

export default function Home() {

  const [formStep, setFormStep] = React.useState(0)

  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
      studentId: '',
      year: '',
    },
  })

  const onSubmit = (data: Input) => {

    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }
  console.log(form.watch());

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>
            Register
          </CardTitle>
          <CardDescription>
            Register to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-8">
              <div className={cn("space-y-3", { hidden: formStep === 1 })}>

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Name" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Student Id */}
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Student Id" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger >
                            <SelectValue placeholder="Select Your Year of study" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[10, 11, 12, 13].map((year) => {
                            return (
                              <SelectItem key={year} value={year.toString()}>
                                Year {year}
                              </SelectItem>
                            )

                          })}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className={cn("space-y-3", { hidden: formStep === 0 })}>

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Name */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex gap-2'>
                <Button type="submit" className={cn({ hidden: formStep === 0 })} >Submit</Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({ hidden: formStep === 1 })}
                  onClick={() => setFormStep(1)}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />

                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({ hidden: formStep === 0 })}
                  onClick={() => setFormStep(0)}
                >
                  Go Back
                  <ArrowLeft className="w-4 h-4 ml-2" />

                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div >
  )
}
