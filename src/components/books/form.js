const AddingForm = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <label htmlFor="categories">
        Category
        <select name="categories" id="categories">
          <option value="action">Action</option>
          <option value="science Fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </label>
    </form>
  </div>
);

export default AddingForm;
