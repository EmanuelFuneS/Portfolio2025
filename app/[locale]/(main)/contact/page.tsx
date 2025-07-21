'use client';
import CustomButton from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Form } from '@heroui/form';
import { Input, Textarea } from '@heroui/input';
import React from 'react'
import { useI18n } from '@/app/i18n/context';


const Page = () => {
    const { dict } = useI18n()
    return (
        <div className='flex items-center justify-center ' style={{ minHeight: 'calc(100vh - 150px)' }}>
            <Card className='w-full md:p-8 md:w-1/2 bg-[#E5E7EB] dark:bg-[#222222]'>
                <CardHeader className='flex flex-col'>
                    <Typography as='h1' variant='headline' >
                        {dict.contact.title}
                    </Typography>
                    <Typography as='h2' variant='subline' >
                        {dict.contact.subtitle}
                    </Typography>

                </CardHeader>
                <CardBody>

                    <Form >
                        <Input
                            variant='faded'
                            isRequired
                            errorMessage="Pleas enter a email"
                            label={dict.contact.email}
                            labelPlacement="outside"
                            name="email"
                            placeholder={dict.contact.email}
                            type="email"

                        />
                        <Input
                            variant='faded'
                            isRequired
                            errorMessage="Pleas enter your full name"
                            label={dict.contact.fullName}
                            labelPlacement="outside"
                            name="fullname"
                            placeholder={dict.contact.fullName}
                            type="string"

                        />
                        <Textarea
                            variant='faded'
                            isRequired
                            errorMessage="Pleas enter a Message"
                            label="Message"
                            labelPlacement="outside"
                            name="message"
                            placeholder={dict.contact.message}
                            type="text"

                        />
                        <CustomButton type='submit'>
                            {dict.contact.send}
                        </CustomButton>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Page