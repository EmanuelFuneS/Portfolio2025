'use client';
import CustomButton from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Form } from '@heroui/form';
import { Input, Textarea } from '@heroui/input';
import React from 'react'


const Page = () => {
    return (
        <div className='flex items-center justify-center ' style={{ minHeight: 'calc(100vh - 150px)' }}>
            <Card className='w-full md:p-8 md:w-1/2 bg-[#E5E7EB] dark:bg-[#222222]'>
                <CardHeader>
                    <Typography as='h1' variant='headline' >
                        Please let me a Message
                    </Typography>

                </CardHeader>
                <CardBody>

                    <Form >
                        <Input
                            variant='faded'
                            isRequired
                            errorMessage="Pleas enter a email"
                            label="Email"
                            labelPlacement="outside"
                            name="email"
                            placeholder="Enter your Email"
                            type="email"

                        />
                        <Input
                            variant='faded'
                            isRequired
                            errorMessage="Pleas enter your full name"
                            label="Full Name"
                            labelPlacement="outside"
                            name="fullname"
                            placeholder="Enter your Full name"
                            type="string"

                        />
                        <Textarea
                            variant='faded'
                            isRequired
                            errorMessage="Pleas enter a Message"
                            label="Message"
                            labelPlacement="outside"
                            name="message"
                            placeholder="Enter your Message"
                            type="text"

                        />
                        <CustomButton type='submit'>
                            Submit
                        </CustomButton>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Page