"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { categories } from "@/data/categories";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function CreateProductPage() {
  const [variants, setVariants] = useState([
    {
      id: Date.now(),
      sku: `NM-${Math.floor(Math.random() * 100000)}`,
      color: "",
      size: "",
      stock: "",
    },
  ]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    slug: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    variants: "",
    tags: "",
  });

  const handelAddNewVariant = () => {
    let existingVariants = [...variants];
    existingVariants.push({
      id: Date.now(),
      sku: `NM-${Math.floor(Math.random() * 100000)}`,
      color: "",
      size: "",
      stock: "",
    });

    setVariants(existingVariants);
  };
  const handelCancleVariant = (id) => {
    if (variants.length > 1) {
      const updatedVariantList = variants.filter((vitem) => vitem.id !== id);
      setVariants(updatedVariantList);
    }
  };

  const handelInputVariant = (id, field, value) => {
    let variantInputChange = variants.map((vitem) => {
      if (vitem.id == id) {
        vitem[field] = value;
      }
      return vitem;
    });
    setVariants(variantInputChange);
  };

  console.log(variants);

  return (
    <>

      <section className="rounded-3xl mt-16 border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <form className="grid gap-4 md:grid-cols-2">
          <Input
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Enter product title"
            label="Title"
          />
          <Input
            value={newProduct.slug}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, slug: e.target.value }))
            }
            placeholder="product-slug"
            label="Slug"
          />

          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">
              Category
            </span>
            <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm">
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <Input min={1} type="number" placeholder="0" label="Price" />
          <Input
            value={newProduct.discountPercentage}
            onChange={(e) =>
              setNewProduct((prev) => ({
                ...prev,
                discountPercentage: e.target.value,
              }))
            }
            max={100}
            min={0}
            type="number"
            placeholder="0"
            label="Discount Percentage"
          />

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">
              Description
            </span>
            <textarea
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
              placeholder="Write product description"
            />
          </label>
          <Input
            value={newProduct.tags}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, tags: e.target.value }))
            }
            placeholder="e.g hoodie, winter, street"
            label="Tags (comma separated)"
          />
          <Input type="file" label="Upload Thumbnail" />

          <Input type="file" label="Images" multiple />

          <div className="md:col-span-2">
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Variant Sample
              </p>
              <Button variant="secondary" onClick={handelAddNewVariant}>
                + Add Variant
              </Button>
            </div>
      <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Product Description
  </label>

  <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
    {/* Toolbar */}
    <div className="flex flex-wrap gap-2 border-b border-slate-200 p-4">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`rounded-lg px-3 py-1 text-sm font-medium ${
          editor.isActive("bold")
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Bold
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`rounded-lg px-3 py-1 text-sm font-medium ${
          editor.isActive("italic")
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Italic
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`rounded-lg px-3 py-1 text-sm font-medium ${
          editor.isActive("underline")
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Underline
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded-lg px-3 py-1 text-sm font-medium ${
          editor.isActive("bulletList")
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Bullet List
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`rounded-lg px-3 py-1 text-sm font-medium ${
          editor.isActive("orderedList")
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Number List
      </button>

      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={`rounded-lg px-3 py-1 text-sm font-medium ${
          editor.isActive("heading", { level: 2 })
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Heading
      </button>
    </div>

    {/* Editor */}
    <EditorContent editor={editor} />
  </div>
</div>

{variants.map((vitem) => (
  <div
    key={vitem.id}
    className="mt-2 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-13"
  >
    <input
      value={vitem.sku}
      onChange={(e) =>
        handelInputVariant(vitem.id, "sku", e.target.value)
      }
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm col-span-3"
      placeholder="SKU"
    />

    <input
      value={vitem.color}
      onChange={(e) =>
        handelInputVariant(vitem.id, "color", e.target.value)
      }
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm col-span-3"
      placeholder="Color"
    />

        <div className="space-y-3">
      <label className="block text-sm font-semibold text-slate-700">
        Product Tags
      </label>

      {/* Show JSON Output (optional) */}
      <pre className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
        {JSON.stringify(selected)}
      </pre>

      {/* Tags Input */}
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="tags"
          placeHolder="enter product tags"
        />
      </div>

      <p className="text-xs italic text-slate-500">
        Press enter to add new tag
      </p>
    </div>

    <select
      value={vitem.size}
      onChange={(e) =>
        handelInputVariant(vitem.id, "size", e.target.value)
      }
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm col-span-3"
    >
      {["s", "m", "l", "xl", "2xl", "3xl"].map((size) => (
        <option key={size} value={size}>
          {size.toUpperCase()}
        </option>
      ))}
    </select>

    <input
      value={vitem.stock}
      onChange={(e) =>
        handelInputVariant(vitem.id, "stock", e.target.value)
      }
      type="number"
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm col-span-3"
      placeholder="Stock"
    />

    {variants.length > 1 && (
      <Button
        onClick={() => handelCancleVariant(vitem.id)}
        variant="danger"
        className="w-10 ml-auto col-span-1"
      >
        x
      </Button>
    )}
  </div>
))}

          <div className="md:col-span-2 flex gap-3 pt-2">
            <Button
              type="button"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Save Product
            </Button>
            <Button
              type="reset"
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700"
            >
              Reset
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}