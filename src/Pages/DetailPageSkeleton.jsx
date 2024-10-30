import Skeleton from "react-loading-skeleton";
const DetailPageSkeleton = () => {
  return (
    <div className="mx-auto my-6 flex max-w-xl flex-col items-center justify-between bg-primary pb-6 pt-3">
      <Skeleton height={100} width={100} circle />
      <div className="mb-4 mt-4 w-10/12 border-2 border-solid border-slate-400 py-3 text-center">
        <p className="mb-2 flex w-full justify-center font-bold">
          Name:
          <span className="itemSkeleton">
            <Skeleton height={20} />
          </span>
        </p>
        <p className="mb-2 flex w-full justify-center font-bold">
          Age:
          <span className="itemSkeleton">
            <Skeleton height={20} />
          </span>
        </p>
        <p className="mb-2 flex w-full justify-center font-bold">
          Gender:
          <span className="itemSkeleton">
            <Skeleton height={20} />
          </span>
        </p>
        <p className="mb-2 font-bold">
          <label className="flex w-full justify-center">
            Status:
            <span className="itemSkeleton">
              <Skeleton height={20} />
            </span>
          </label>
        </p>
        <p className="mb-2 flex w-full justify-center font-bold">
          Risk level:
          <span className="itemSkeleton">
            <Skeleton height={20} />
          </span>
        </p>
        <p className="mb-2 flex w-full justify-center font-bold">
          Arrest count:
          <span className="itemSkeleton">
            <Skeleton height={20} />
          </span>
        </p>
      </div>
      <div className="flex w-10/12 justify-end">
        <button className="btn btn-primary mr-3">save</button>
        <button className="btn btn-primary">back</button>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
