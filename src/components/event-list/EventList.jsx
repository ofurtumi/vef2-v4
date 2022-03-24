import React, { useEffect, useState } from 'react';

import { Events } from '../events/Events';

import s from './EventList.module.css';

const apiUrl = process.env.REACT_APP_API_URL;

export function EventList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null)

      let json;

      try {
        const result = await fetch(apiUrl);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        console.warn('unable to fetch eventslist', e);
        setError('Gat ekki sótt fréttalista.');
        return;
      } finally {
        setLoading(false);
      }

      // console.log('json :>> ', json);
      setEvents(json.items);
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  return (
    <section className={s.eventsList}>
      <div className={s.eventsList__list}>
        {events.map((item, i) => {

          return (
            <div key={i} className={s.eventsList__item}>
              <Events
                title={item.name}
                id={item.id}
                allEventsUrl={`/${item.id}`}
                limit={5}
              />
            </div>
          )
        })}
      </div>
    </section>
  );
}