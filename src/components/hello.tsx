interface IHello {
  title: string;
}

function Hello({ title }: IHello) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Hello;
