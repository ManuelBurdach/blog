import "./admin.css";

const Admin = () => {
  const save = (e) => {
    e.preventDefault();
    console.log("Hallo");
    const formData = new FormData(e.target);
    fetch("http://localhost:7777/api/v1/posts", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <section className="admin">
      <form onSubmit={save}>
        <input name="title" type="text" placeholder="Title" />
        <textarea name="text" cols="30" rows="10" placeholder="Text"></textarea>
        <input name="link" type="file" />
        <input type="submit" value="Submit blog post" />
      </form>
    </section>
  );
};

export default Admin;
