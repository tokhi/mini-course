course = Course.create(title: "course 1 title", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren")
section = Section.create(title: 'chapter 1', course: course)

episodes = Episode.create([
    { title: '1. Getting Started with Rails 6 and react', description: 'lorem test 12e', url: 'https://www.youtube.com/embed/dpYPLUO3QcI', section: section},
    { title: '2. Rails 6 React trouble shooting ', description: 'lorem test 12e', url: 'https://www.youtube.com/embed/dpYPLUO3QcI', section: section},
    { title: '3. Building a simple React app', description: 'lorem test 12e', url: 'https://www.youtube.com/embed/dpYPLUO3QcI', section: section},
    { title: '4. Adding React Router DOM to your App ', description: 'lorem test 12e', url: 'https://www.youtube.com/embed/dpYPLUO3QcI', section: section}
])