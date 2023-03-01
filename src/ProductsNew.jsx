export function ProductsNew() {
  return (
    <div>
      <h1>New product</h1>
      <form>
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
        <button type="submit">Create photo</button>
      </form>
    </div>
  );
}
