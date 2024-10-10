import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Fahmi',
    lastName:  'Aquinas',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
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
    headline: <>{person.role}</>,
    subline: <>I'm Fahmi, a {person.role}, where I craft intuitive applications. After hours, I build my own projects.</>
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
            <p>Fahmi is a Jakarta-based {person.role} with a passion for transforming complex challenges into simple, comprehensive solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.</p>
            <p>My work spans a diverse range of disciplines, from crafting intuitive digital interfaces to designing immersive interactive experiences. I’m particularly interested in the intersection of analyst and engineering, where technology meet functionality. I believe that the best solutions arise from a balance of creativity and technical rigor, and I enjoy the challenge of finding that balance in every project I undertake.</p>
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'BRI',
                timeframe: '2022 - Present',
                role: 'Junior Manager',
                achievements: [
                    <>Tokenize Card Transaction</>,
                    <>Reengineering Business Process Card Production</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Bank Mandiri',
                timeframe: '2021 - 2022',
                role: 'Backend Developer',
                achievements: [
                    <>Developed a feature card virtual in super apps livin' By Mandiri.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Brawijaya',
                description: <>Studied computer science.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'SQL',
                description: <>Able to transform business idea into an efficient database.</>,
                images: [
                    {
                        src: '/images/projects/skill/schema_db.png',
                        alt: 'schema_db',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Data Visulization',
                description: <>Able to transform raw data into meaningful insights.</>,
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
                title: 'SAP',
                description: <>Facilitating the implementation and support of SAP modules to enhance client business functionality and overall performance, 
                while maintaining a high level of customer needs. </>,
                images: [
                ]
            }
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