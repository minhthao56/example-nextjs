import { NextPage } from "next";
import { useEffect, Fragment } from "react";
import Link from "next/link";

import { doGetTodos } from "../redux";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";

const Home: NextPage = () => {
  const listTodo = useAppSelector((state) => state.test.listTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTodos());
  }, [dispatch]);

  return (
    <Fragment>
      <head>
        <title>Home</title>
      </head>
      <h2>TODOS:</h2>
      <div>
        {listTodo?.map((todo, i) => {
          return (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href={"/todo/[id]"} as={`/todo/${todo.id}`} key={i}>
              <div
                style={{
                  padding: 16,
                  borderWidth: 1,
                  borderColor: "black",
                  borderStyle: "solid",
                  marginBottom: 16,
                  cursor: "pointer",
                }}
              >
                {todo.title}
              </div>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Home;
