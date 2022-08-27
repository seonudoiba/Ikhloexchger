import Image from "next/image";

const About = () => {
  return (
    <div className="py-36 bg-white full-width ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <Image
              src="/../public/about.jpg"
              alt="Picture of the author"
              width="350px"
              height="300px"
            />
             <p className="mt-6 font-bold text-gray-600">
              We are one of the fastest emerging E-commerce platforms in the
              Nigeria.
            </p>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Ikhloexchger
            </h2>
            <p className="mt-4 text-gray-600">
              We are a team of skilled personnel; our personality is interactive
              and cheerful. Our work is geared towards offering a fresh and
              energetic approach. We work continuously to deliver a safe
              exchange environment that allows you trade your digital assets
              with ease; conduct a seamless e-commerce enterprise and introduce
              you to a world of easy access to luxury. We take pride in our
              one-on-one attentive relationships, in which every step is given
              care. That is Jamestown, we make everyday transactions hassle
              free. Let Jamestown handle it!
            </p>
            <p className="mt-4 text-gray-600">
              We have quickly peaked to being one the most reliable platforms
              for our customer's day to day deals especially with our 24/7
              policy that allows for non- stop transaction all hours of the day.
              Here at JamestownNg, our principles are built on convenience,
              integrity, modernity, timeliness and customer satisfaction.
              Definitely, we are your best bet and your go to for anything E-
              commerce especially if stress-free is your watchword. Sit back and
              relax! Allow us be a part of your success story today as we lessen
              your burden and make smooth as well as effortless the handling of
              your business deals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
