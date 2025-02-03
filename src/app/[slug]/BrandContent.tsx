

type Props = {
    desc:string,
    terms:string,

}

const BrandContent = ({desc,terms}:Props) => {
  return (
    <div className="mt-8">
          <h2 className=" text-gray-900 text-xl font-semibold mb-2">
            Description
          </h2>
          <p className="text-gray-700 mb-4">{desc}</p>
          <h2 className=" text-gray-900 text-xl font-semibold mb-2">
            Terms and Conditions
          </h2>
          <p
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: terms || "" }}
          ></p>
        </div>
  )
}

export default BrandContent;