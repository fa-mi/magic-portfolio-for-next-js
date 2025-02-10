import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Fahmi',
    lastName:  'Aquinas',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/fahmi.aquinas',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/fahmi-aquinas/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:fahmi.aquinas@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Welcome to my site!</>,
    subline: <>Explore my work, skills, and passion for creating innovative solutions.</>,
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: 
        <>
            <p>Fahmi is a Jakarta-based {person.role} with a passion for transforming <b> complex business requirements</b> challenges into <b>simple and comprehensive solutions</b>. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.</p>
            <p>My work spans a diverse range of disciplines, from crafting intuitive digital interfaces to analyzing <b>business process</b> able to meets <b>customers needs</b>. I’m particularly interested in the intersection of <b>analysis</b> and <b>engineering</b>, where technology meet functionality. I believe that the best solutions arise from a balance of creativity and technical rigor, and I enjoy the challenge of finding that balance in every project I undertake.</p>
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'PT. Bank Rakyat Indonesia Tbk',
                timeframe: '2023 - Present',
                role: 'BFLP - Junior Manager',
                achievements: [
                    <>Debit Card Contactless on BRIMO</>,
                    <>Data Stream Kafka</>,
                    <>Debit Card Request on BRIMO</>,
                    <>NFC Payment using Tokenize Technology</>,
                    <>Channel Debit Card Activation</>,
                    <>Third Party Debit Card Inventory</>,
                    <>Debit Card Dynamic Currency Matching</>,
                    <>Reengineering Business Process Card Production</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/work/bri/cardpro.png',
                        alt: 'Cardpro',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/cams.png',
                        alt: 'CAMS',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/umi2.png',
                        alt: 'Inventory Third Party',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/dcm.png',
                        alt: 'Dynamic Currency Matching',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/nfc-payment.png',
                        alt: 'NFC Payment',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/request-card.png',
                        alt: 'Debit Card Request',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/kafka.png',
                        alt: 'Kafka',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/bri/contactless.jpeg',
                        alt: 'Contactless',
                        width: 16,
                        height: 9
                    },
                    
                ]
            },
            {
                company: 'PT. Ayo Kreasi Bersama',
                timeframe: '2024',
                role: 'Freelance Fullstack Developer',
                achievements: [
                    <>Developed some features like user able to register tax affiliate, admin able to edit users request, and admin can upload proof tax invoices.</>
                ],
                images: [
                    {
                        src: '/images/projects/work/ayocpns/users-panel.jpg',
                        alt: 'User Panel',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/ayocpns/admin-panel.jpg',
                        alt: 'Admin Panel',
                        width: 16,
                        height: 9
                    },
                 ]
            },
            {
                company: 'PT. Bank Mandiri Tbk',
                timeframe: '2021 - 2022',
                role: 'Backend Developer',
                achievements: [
                    <>Developed a feature card virtual in super apps livin' By Mandiri.</>
                ],
                images: [
                    {
                        src: '/images/projects/work/mandiri/virtual-card.jpeg',
                        alt: 'Virtual Card',
                        width: 16,
                        height: 9
                    },
                 ]
            },
            {
                company: 'PT. Trias Sentosa Tbk',
                timeframe: '2020 - 2021',
                role: 'IT Developer',
                achievements: [
                    <>Developed some applications based on business requirements using SAP framework.</>
                ],
                images: [ 
                    {
                        src: '/images/projects/work/trias/zolap.png',
                        alt: 'SAP tcode application',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/trias/hr-home.png',
                        alt: 'SAP HR application',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/trias/gp-sales.jpeg',
                        alt: 'GP Sales',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Brawijaya',
                timeframe: '2015 - 2019',
                description: <>Pursued a Bachelor’s degree in Computer Science.</>,
            },            
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Achievements',
        skills: [
            {
                title: 'Brilian Future Leadership Program',
                description: <>
                   🏅 My team emerged as the Champion of Season 2 in the IT Onboarding Bootcamp by ASK Learning, where we innovated and developed BRI One Tap, a payment and transfer solution integrated with BRIMO mobile banking apps using NFC technology.
                   🥇 I secured the 1st rank in the prestigious BFLP program with business process reengineering project, CardPro—a cutting-edge system designed to streamline card production—demonstrating my expertise in financial technology and process optimization. 
                </>,          
                images: [
                    {
                        src: '/images/projects/achievements/bflp/one-tap.png',
                        alt: 'One Tap',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/achievements/bflp/baymax.jpg',
                        alt: 'Baymax',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/achievements/bflp/final-result.png',
                        alt: 'Final Result',
                        width: 16,
                        height: 9
                    },
                ]
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };