'use client'

import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient';

// define own datatype for Course
interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

const FeatureSection = () => {

    const featuredCourse = courseData.courses.filter((course:Course) => course.isFeatured);

  return (
    <div className="py-12 px-4 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-8">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 overflow-hidden h-full">
                <div className="p-4 sm:p-4 flex flex-col items-center text-center flex-grow gap-8 ">
                  <p className='text-lg sm:text-xl text-black mt-4 dark:text-neutral-200' >{course.title}</p>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow' >{course.description}</p>
                  <Link href={`/courses/${course.slug}`} className='border rounded-[50px] border-gray-600 py-2 px-6 ' >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/courses">
          <Button className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            View all Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeatureSection