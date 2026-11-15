
import { useForm } from "../hooks/useForm";
import { useToggle } from "../hooks/useToggle";
import Input from "./shared/Input/Input.jsx";
import Button from "./shared/Button/Button.jsx";

function CreatePost({ onAddPost }) {
  const validate = (values) => {
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required";
    }

    return errors;
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    reset,
  } = useForm({ title: "", content: "" }, validate);

  const [showTips, tipsControls] = useToggle(false);
  const [showPreview, previewControls] = useToggle(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    onAddPost(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a New Post</h3>

      <Input
        label="Post title"
        name="title"
        type="text"
        placeholder="Post title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title ? errors.title : ""}
      />

      <Input
        as="textarea"
        label="Write your post"
        name="content"
        placeholder="Write your post..."
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="button-group">
        <Button type="button" variant="secondary" onClick={tipsControls.toggle}>
          {showTips ? "Hide tips" : "Show tips"}
        </Button>

        <Button type="button" variant="secondary" onClick={previewControls.toggle}>
          {showPreview ? "Hide preview" : "Show preview"}
        </Button>
      </div>

      {showTips && <p>Tip: Keep titles under 60 characters.</p>}

      {showPreview && (
        <section aria-label="Post preview">
          <h4>Preview</h4>
          <p>{values.content || "Your post preview will appear here."}</p>
        </section>
      )}

      <Button type="submit">Publish Post</Button>
    </form>
  );
}

export default CreatePost;
