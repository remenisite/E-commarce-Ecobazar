import Link from "next/link";
import Image from "next/image";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { products } from "@/data/products";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";

export default function CategoriesListPage() {
  const { data } = useGetCategoriesQuery();

  return (
    <>
      <AdminPageHeader
        title="Category List"
        description="Manage category structure and catalog grouping."
        action={
          <Link
            href="/admin/categories/new"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Create Category
          </Link>
        }
      />

      {/* List View */}
      <section className="space-y-4">
        {data?.data.map((category) => {
          const count = products.filter(
            (product) => product.category === category._id
          ).length;

          return (
            <article
              key={category._id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {/* Thumbnail */}
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={category.thumbnail}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                  {category.description}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {count} Products
                </p>
              </div>

              {/* Action */}
              <Link
                href={`/admin/categories/${category._id}`}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                View
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}