import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1024px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg",
    address: "Some address 10, 12345 some city",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
