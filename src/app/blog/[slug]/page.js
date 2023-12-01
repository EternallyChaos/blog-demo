import { sortBlogs, formattedDate } from "@/libs";
import { Blogs } from "@/data/Blogs";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Image from "next/image";
import AuthorIcon from "@/components/icons/AuthorIcon";
import RecentBlogs from "@/components/blog/RecentBlogs";

export default function Page({ params }) {
  const blogData = Blogs.find((slug) => slug.id === params.slug);

  const date = formattedDate(blogData);

  const recentBlogs = sortBlogs(Blogs);

  return (
    <div>
      <MaxWidthWrapper>
        <main>
          <article>
            <header className="mx-auto max-w-screen-xl pt-16 text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                {blogData.title}
              </h1>
              {/* <p className="mt-6 text-lg text-gray-700">
                You're doing marketing the wrong way
              </p> */}
              <div className="mt-4 flex justify-center items-center gap-4">
                <div className="flex">
                  <AuthorIcon />
                  <span className="ml-1 text-gray-700">{blogData.author}</span>
                </div>
                <p className="text-gray-700">Published {date}</p>
              </div>
              <div
                className="mt-4 mb-4 flex flex-wrap justify-center gap-2"
                aria-label="Tags"
              >
                {blogData.seoTags.map((tag, i) => {
                  return (
                    <button
                      key={i}
                      className="rounded-lg bg-gray-200 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200"
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
              <div className="">
                <Image
                  src={blogData.image}
                  alt="img"
                  width={1200}
                  height={800}
                  className="object-cover object-center rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </header>
            <div className="mx-auto mt-2 space-y-3 p-6 text-base text-gray-800">
              <strong className="text-lg font-medium">
                In the fast-paced and ever-evolving world we live in, finding
                balance has become an elusive quest for many. We often find
                ourselves juggling multiple responsibilities, leaving little
                time for self-care and mindful living. However, the key to a
                fulfilling life lies in embracing a balanced lifestyle. In this
                comprehensive guide, we will explore the essential elements that
                contribute to a harmonious existence, touching on mindful
                practices, positive habits, and the transformative journey
                towards wellness and happiness.
              </strong>
              <h2 className="text-xl font-bold text-black">
                Understanding Balanced Living
              </h2>
              <p className="">
                Balanced living is not just about managing work and personal
                life; it extends to nurturing the body, mind, and soul. It
                involves making intentional choices that contribute to overall
                well-being. Recognizing the need for balance is the first step
                towards creating a lifestyle that promotes happiness and
                fulfillment.
              </p>
              <h2 className="text-xl font-bold text-black">
                Mindful Practices for Daily Living
              </h2>
              <p>
                Mindfulness is a powerful tool in achieving balance.
                Incorporating mindful practices into your daily routine can have
                a profound impact on your mental and emotional well-being. From
                meditation and deep breathing exercises to mindful eating, these
                practices cultivate present-moment awareness, helping you
                navigate life&apos;s challenges with greater resilience.
              </p>
              <Image
                src="/pexels-rachel-claire-4997903.jpg"
                alt="img"
                width={800}
                height={800}
                className="object-cover object-center rounded-lg"
              />
              <h2 className="text-xl font-bold text-black">
                Cultivating Positive Habits
              </h2>
              <p>
                Positive habits are the building blocks of a balanced lifestyle.
                Whether it&apos;s maintaining a consistent sleep schedule,
                staying physically active, or fostering healthy relationships,
                these habits contribute to overall well-being. We&apos;ll
                explore practical tips on how to integrate positive habits into
                your routine, creating a foundation for a more fulfilling life.
              </p>

              <h2 className="text-xl font-bold text-black">
                The Transformative Journey
              </h2>
              <p>
                Achieving balance is not a destination; it&apos;s a continuous
                journey of self-discovery and growth. This section will discuss
                the transformative nature of embracing a balanced lifestyle.
                It&apos;s about adapting to change, learning from experiences,
                and evolving into the best version of yourself. The journey
                towards wellness and happiness is a personal one, but the
                rewards are universal.
              </p>
            </div>
          </article>
        </main>

        <div className="w-fit mx-auto mt-10 flex space-x-2">
          <div className="h-0.5 w-2 bg-gray-600"></div>
          <div className="h-0.5 w-32 bg-gray-600"></div>
          <div className="h-0.5 w-2 bg-gray-600"></div>
        </div>

        <RecentBlogs recentBlogs={recentBlogs} />
      </MaxWidthWrapper>
    </div>
  );
}
