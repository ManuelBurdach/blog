import "./admin.css";

const formInput = { title: "", text: "", link: "" };

const Admin = () => {
  const save = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("http://localhost:7777/api/v1/posts", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <section className="admin">
      <form onSubmit={save}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            formInput.title = e.target.value;
          }}
        />
        <textarea
          name="text"
          rows="5"
          placeholder="Text"
          onChange={(e) => {
            formInput.text = e.target.value;
          }}
        ></textarea>
        <input name="link" type="file" />
        <input type="submit" value="Submit blog post" />
      </form>
    </section>
  );
};

export default Admin;
