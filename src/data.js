const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);
const allData = {
  boards: [
    {
      bid: ReturnId('BID'),
      name: 'No Assigned To',
      color: 'grey',
      cards: [
        {
          cid: ReturnId('TASK'),
          subject: 'Server Error',
          description:
            'There are many variations of passages of Lorem .There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which',
          timeStamp: '',
          urgency: 'Low',
        },
        {
          cid: ReturnId('TASK'),
          subject: 'Routing Error',
          description:
            'Foster a more collaborative work environment, with more effective communication.Foster a more collaborative work environment, with more effective communication',
          timeStamp: '',
          urgency: 'Low',
        },
        {
          cid: ReturnId('TASK'),
          subject: 'Wrong Data',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,',
          timeStamp: '',
          urgency: 'Low',
        },
      ],
    },
    {
      bid: ReturnId('BID'),
      color: '#faa472',
      name: 'Beth Angles',
      img: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
      cards: [
        {
          cid: ReturnId('TASK'),
          subject: 'Login Page Issue',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,',
          timeStamp: '2023-03-28',
          urgency: 'Low',
        },
        {
          cid: ReturnId('TASK'),
          subject: 'API issue',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,',
          timeStamp: '2023-03-28',
          urgency: 'Low',
        },
      ],
    },
    {
      bid: ReturnId('BID'),
      color: '#c07dfa',
      name: 'John Compton',
      img: 'https://media.istockphoto.com/id/1277873802/photo/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-of-the-picture.jpg?b=1&s=170667a&w=0&k=20&c=5C_zLbh5cohuKby821RbHZTP87Ae5CvBmUoPvy1-SbI=',
      cards: [
        {
          cid: ReturnId('TASK'),
          subject: 'saloni',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,',
          timeStamp: '23/04/2021',
          urgency: 'Low',
        },
      ],
    },
  ],
  users: [
    {
      id: ReturnId('UID'),
      name: 'Saloni',
      color: '#ea657b',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: ReturnId('UID'),
      name: 'Sam Wills',
      color: '#faa472',
      img: 'https://media.istockphoto.com/id/1277873802/photo/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-of-the-picture.jpg?b=1&s=170667a&w=0&k=20&c=5C_zLbh5cohuKby821RbHZTP87Ae5CvBmUoPvy1-SbI=',
    },
    {
      id: ReturnId('UID'),
      name: 'Stacy Max',
      color: '#ea657b',
      img: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
    },
    {
      id: ReturnId('UID'),
      name: 'Jarvis William',
      color: '#c07dfa',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
  ],
};
export default allData;
