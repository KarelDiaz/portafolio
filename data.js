/* eslint-disable prettier/prettier */
const data = {
  name: 'Raymond Abreu Fleita',
  email: 'raydmonabreufleita@gmail.com',
  phone: '+5353737330',
  socialMedias: [
    {
      name: 'Telegram',
      icon: 'telegram',
      link: 'https://t.me/+5353737330',
    },
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/raymondabreu ',
    },
  ],
  histories: [
    // Work
    {
      name: 'Work',
      contents: [

        // Binary Coffee
        {
          name: 'Sitema Informatico de Generacion de Evaluaciones Integrales (SIGEI)',
          name2: 'UCI',
          dateStart: '2019',
          dateEnd: '2020',
          description:
            'Manage evaluations, grades and student titles',
          events: [],
          role: 'Frontend Developer',
          team: '',
          tasks: [],
          technologies: ['Vue', 'Tailwind'],
          links: [
          ],
        },
        // Thesis, Graduation paper
        {
          name:
            'Mobile platform for students to learn programing',
          name2: 'Thesis, Graduation paper',
          dateStart: '2018',
          dateEnd: '2019',
          description:
            "It's an interactive platform for android devices. In which tutorials are shown interactively and play.",
          events: [],
          role: 'Developer',
          team: '1 Developer',
          tasks: [
            'Implement the android aplication',
            'Implement the each programing language tutorial',
          ],
          technologies: ['Android', 'Java'],
          links: [
            {
              title: 'You can look at the university here',
              link: 'https://uci.cu',
            },
          ],
        },
      ],
    },
    // Education
    {
      name: 'Education',
      contents: [
        {
          name: 'University of Information Sciences',
          name2: 'Bachelor of Computer Science',
          dateStart: '2014',
          dateEnd: '2019',
          description: '',
          events: [
            // { name: 'ICPC Caribbean Finals', date: '2015/11' },
          ],
          role: '',
          team: '',
          tasks: [],
          technologies: [],
          links: [
            {
              title: 'You can look at the university site',
              link: 'https://uci.cu',
            },
          ],
        },
        {
          name: 'IPVCE - Ernesto Guevara',
          name2: 'Bachelor',
          dateStart: '20011',
          dateEnd: '2014',
          description: '',
          events: [],
          role: '',
          team: '',
          tasks: [],
          technologies: [],
          links: [
            {
              title: 'You can look at here',
              link:
                'https://twitter.com/ipvceeguevaravc',
            },
          ],
        },
      ],
    },
  ],
};

export default data;
