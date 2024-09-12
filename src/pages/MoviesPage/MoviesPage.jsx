import { Formik, Form, Field } from 'formik';
import { getMovies } from '../../services/movie-api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const initialValues = {
  query: ""
};

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMassage, setErrorMassage] = useState(false);
  const query = searchParams.get("query");

  useEffect(() => {
    async function fetchMovies() {

      if (!query) return;

      try {
        setLoading(true);
        const result = await getMovies(query);
      
        if (result.length === 0) {
          setError(true);
          setMovies([]);  
        } else {
          setMovies(result);
          setError(false); 
        }
      } catch {
        setError(true); 
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  const handleSubmit = (values, actions) => {
    if (!values.query) {
      setError(false);
      setErrorMassage(true);
      setMovies([]);
      return; 
        }
    searchParams.set("query", values.query);
    setError(false);
    setErrorMassage(false);
    setSearchParams(searchParams);
    actions.resetForm();
  };



    return (<>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
            <Field type="text" name="query" placeholder="Search..." className={css.input} />
			  <button type="submit" className={css.button}>Submit</button>
			</Form>
      </Formik>
      {loading && <Loader />}
      {error && <div className={css.errorContainer}>There are no films. Try again!</div>}
      {errorMassage && <div className={css.errorContainer}>Enter a saerch query!</div>}
        <MovieList movies={movies} />
        </>
  );
}
