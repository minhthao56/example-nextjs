import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { doGetOneTodo } from "../../../redux";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";

const Todo = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const oneTodo = useAppSelector((state) => state.test.oneTodo);

  useEffect(() => {
    dispatch(doGetOneTodo(router.query.id));
  }, [dispatch, router.query.id]);

  return (
    <div>
      <head>
        <title>{oneTodo.title}</title>
      </head>
      <h1>{oneTodo.id}</h1>
      <p>{oneTodo.title}</p>
    </div>
  );
};

export default Todo;
