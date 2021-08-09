import { createSignal, For } from "solid-js";
import "./Search.css";
type customInput = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};
export const Search = () => {
  const [search, Setsearch] = createSignal("");
  const [resp, SetResp] = createSignal({ objects: [] });
  const [result, SetResult] =createSignal()
  const searchPkg = (e: customInput) => {
    Setsearch(e.currentTarget.value);
    fetch(
      `https://registry.npmjs.org/-/v1/search?text=${search()}`
    ).then((response) => {
      response.json().then((e) => {
        SetResp(e);
      });
    });
    let packages = resp().objects.filter((data) => {
        //@ts-ignore
        let pkgname: string = data.package.name;
        return pkgname.startsWith(e.currentTarget.value);
    });
    //@ts-ignore
    packages = packages.map((data) => {
        //@ts-ignore
        return data = `${JSON.stringify(data.package.name)}`
    })
    //@ts-ignore
    SetResult(packages)
  };
  return (
    <section className="main">
      <input
        onInput={(e) => {
          searchPkg(e);
        }}
        onChange={(e) => {
            searchPkg(e);
        }}
        type="text"
        className="packagesearch"
        placeholder="Search over 1M+ packages"
      />
      <div className="autocompbox">
        {/* @ts-ignore */}
        <For each={result()}>{res => (<li>{res}</li>)}</For>
      </div>
    </section>
  );
};
