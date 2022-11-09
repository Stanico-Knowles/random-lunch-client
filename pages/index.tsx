import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import actions from '../httpClient/modules/foodPlacePicker'
import styles from '../styles/Home.module.css'
import { IFoodPlaceCrtieria } from '../types/IFoodPlaceCriteria'

export default function Home() {
  const [body, setBody] = useState<IFoodPlaceCrtieria>({
    rating: null,
    price: null,
    distance: null,
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const getFoodPlace = async (e: any) => {
    e.preventDefault();
    await actions.getFoodPlace(body);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Random Lunch</title>
        <meta name="description" content="Randomizer for local food places." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What we <span className='text-blue-500'>Eating?</span>
        </h1>

        <p className={styles.description}>
          Eat Whatever Is Picked!
        </p>

        <form id='food-place-form' className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Getting Started</h3>
            <p className="mt-1 text-sm text-gray-500">
              Enter preferred criteria to filter out some unwanted options.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Min Rating
              </label>
              <div className="mt-1">
                <select
                  id="rating"
                  name="rating"
                  onChange={e => handleChange(e)}
                  className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Max Price Key
              </label>
              <div className="mt-1">
                <select
                  id="price"
                  name="price"
                  onChange={e => handleChange(e)}
                  className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
                Max Distance Key
              </label>
              <div className="mt-1">
                <select
                  id="distance"
                  name="distance"
                  onChange={e => handleChange(e)}
                  className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-start">
          <button
            type="submit"
            onClick={e => getFoodPlace(e)}
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>

      </main>
    </div>
  )
}
