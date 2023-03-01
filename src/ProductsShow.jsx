export function ProductsShow(props) {
  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {props.product.name}</p>
      <p>Url: {props.product.url}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}
