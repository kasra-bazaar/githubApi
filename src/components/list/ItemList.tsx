type items = {
  name: string;
  lang: string | null;
  des: string | null;
};

export default function ItemList({ name, lang, des }: items) {
  return (
    <>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{lang}</td>
          <td>{des}</td>
        </tr>
      </tbody>
    </>
  );
}
