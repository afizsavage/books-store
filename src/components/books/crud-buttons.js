const buttons = [
  {
    id: 0,
    title: 'Remove',
    handleClick() {
      console.log('click');
    },
  },
];

const CrudButton = (item) => {
  const { button } = item;
  return (
    <button type="button" onClick={() => button.handleClick}>
      {button.title}
    </button>
  );
};

const CrudButtons = () => (
  <div>
    <ul>
      {buttons.map((button) => (
        <li key={button.id}>
          <CrudButton button={button} />
        </li>
      ))}
    </ul>
  </div>
);

export default CrudButtons;
