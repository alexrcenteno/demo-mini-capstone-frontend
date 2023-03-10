export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePhoto(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Price <input name="price" type="integer" />
        </div>
        <div>
          Description <input name="description" type="text" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
