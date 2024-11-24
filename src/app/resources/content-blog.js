import { InlineCode } from "@/once-ui/components";
import Link from 'next/link'

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
        display: false,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
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
                role: 'Junior Manager',
                achievements: [
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
                    <>Developed a applications based on business requirements using SAP framework.</>
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
                description: <>Pursued a Bachelor’s degree in Computer Science, achieving a GPA of 3.41/4.00. Developed a strong foundation in programming, software development, and problem-solving skills.</>,
            },
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Problem Solving',
                description: <>Skilled in identifying challenges and implementing effective solutions, I bring a structured approach to problem-solving, analyzing complex issues to uncover root causes and developing creative, data-driven strategies to address them. My solutions are both efficient and scalable, ensuring they meet immediate needs while preparing for future growth. Whether working independently or collaborating within a team, I prioritize clarity and adaptability, consistently delivering results that align with business goals.</>,
                images: [
                    {
                        src: '/images/projects/skill/certificates/problem-solving-basic.jpg',
                        alt: 'Problem Solving Basic',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/skill/certificates/problem-solving-intermediate.jpg',
                        alt: 'Problem Solving Intermediate',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'SQL',
                description: <>Proficient in designing and optimizing databases to transform business requirements into efficient, scalable data structures. Experienced in writing complex queries, managing relational databases, and ensuring data integrity to support business operations.</>,
                images: [
                    {
                        src: '/images/projects/skill/certificates/sql-basic.jpg',
                        alt: 'SQL Basic',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/skill/certificates/sql-intermediate.jpg',
                        alt: 'SQL Intermediate',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/skill/certificates/sql-advanced.jpg',
                        alt: 'SQL Advanced',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Rest API',
                description: <>Experienced in designing and implementing RESTful APIs, I focus on creating scalable, secure, and intuitive interfaces that streamline data exchange between client and server. I follow best practices to ensure consistency, versioning, and optimized performance, making it easy for frontend and backend systems to communicate seamlessly. My APIs are designed with both usability and future extensibility in mind, providing a robust foundation for diverse applications and integrations.</>,
                images: [
                    {
                        src: '/images/projects/skill/certificates/rest-api-intermediate.jpg',
                        alt: 'Problem Solving Intermediate',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Business Intelligence',
                description: <>Skilled in transforming raw data into actionable insights, leveraging advanced analytics and comprehensive data warehousing solutions. Experienced in identifying key trends and providing data-driven recommendations to support strategic decision-making and business growth.</>,
                images: [
                    {
                        src: '/images/projects/skill/data-viz1.PNG',
                        alt: 'data-visulization',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/skill/data-viz2.PNG',
                        alt: 'data-visulization',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Machine Learning',
                description: <>Proficient in building and deploying machine learning models to analyze complex datasets and uncover actionable insights. Experienced in applying advanced algorithms to identify patterns, predict trends, and support data-driven decision-making, helping businesses optimize operations and drive innovation.</>,
                images: [
                    {
                        src: '/images/projects/skill/ml.png',
                        alt: 'machine-learning',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'SAP',
                description: <>Facilitating the implementation and support of SAP modules to enhance client business functionality and overall performance, 
                while maintaining a high level of customer needs. </>,
                images: []
            },
            // {
            //     title: 'Figma',
            //     description: <>Skilled in designing and prototyping with Figma, creating user-centered designs that align with business goals. Experienced in transforming complex processes into visually appealing and functional interfaces to enhance user engagement and drive customer acquisition.</>,
            //     images: [
            //         {
            //             src: '/images/projects/skill/figma1.png',
            //             alt: 'barbershop',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/skill/figma2.png',
            //             alt: 'iCinema',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/skill/figma3.png',
            //             alt: 'iCinema',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/skill/figma4.png',
            //             alt: 'iCinema',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/skill/figma5.png',
            //             alt: 'rent bike',
            //             width: 16,
            //             height: 9
            //         },
            //      ]
            // },
            {
                title: 'Flutter',
                description: <>Proficient in Flutter development, skilled in building responsive and intuitive mobile applications. Experienced in transforming business needs into seamless user experiences, leveraging Flutter’s rich UI capabilities to deliver high-performance, cross-platform apps.</>,
                images: [
                    {
                        src: '/images/projects/skill/flutter1.png',
                        alt: 'flutix',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/skill/flutter2.png',
                        alt: 'flutix',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/skill/flutter3.png',
                        alt: 'flutix',
                        width: 16,
                        height: 9
                    },
                 ]
            },
            // {
            //     title: 'Full Stack',
            //     description: <>Versatile Full Stack developer with expertise in both front-end and back-end technologies. Skilled in building dynamic, scalable web applications, with a strong focus on delivering seamless user experiences and robust server-side functionality. Proficient in modern frameworks, databases, and cloud services to create end-to-end solutions that drive business growth.</>,
            //     images: [
            //         {
            //             src: '/images/projects/skill/front-end.jpg',
            //             alt: 'ayocpns website',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/skill/back-end.png',
            //             alt: 'lodz api',
            //             width: 16,
            //             height: 9
            //         },
            //      ]
            // },
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