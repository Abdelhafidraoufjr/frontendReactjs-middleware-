'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import logo from '../assets/logo.png'
import bg from '../assets/bg.jpg'

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Actualités-Blog', href: '#actualite-blog' },
    { name: 'À propos', href: '#apropo' },
    { name: 'FAQs', href: '#faqs'},
    { name: 'Contact', href: '/contact' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="relative bg-white overflow-hidden" style={{ zoom: 1.1 }}>
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="h-24 w-full flex items-center justify-between py-8 px-6 lg:px-10" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <img src={logo} alt="Logo" className="h-12 w-auto" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 text">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-base font-semibold text-red-600">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/login" className="text-base font-semibold text-red-600">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <img src={logo} alt="" className="h-8 w-auto" />
                            </a>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-red-500 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-red-500 hover:bg-gray-50"
                                    >Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
            sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}

                <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40 min-h-[80vh]">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-black ring-1 ring-white/50 hover:ring-white/70 backdrop-blur-md bg-black/10">
                            Découvrez nos nouvelles recettes naturelles et conseils bien-être.{' '}
                            <a href="#actualite-blog" className="font-semibold text-red-500 hover:text-red-300">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Lire plus <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto py-1">
                        <div className="soustitre text-2xl text-gray-700 mb-2">
                            <h4>معارف الأجداد والعلاجات الطبيعية لحياة صحية</h4>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-red-500">
                            Savoirs Ancestraux & Remèdes Naturels pour une Vie Saine
                        </h1>
                        <p className="mt-10 text-pretty text-lg font-medium text-black">
                            Découvrez des remèdes naturels transmis de génération en génération,<br />
                            Vivez en harmonie avec votre corps et la nature.<br /><br />
                            <p className='soustitre'>اكتشف العلاجات الطبيعية المتوارثة عبر الأجيال
                                <br/>عش في تناغم مع جسدك ومع الطبيعة
                            </p>
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-x-6">
                            <a
                                href="/login"
                                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Get started
                            </a>
                            <a href="/apropo" className="text-sm font-semibold text-red-600">
                                About Us <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
{/* 
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]
                                   -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
                                   sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
            </div>
        </div>
    )
}
