import styled from "styled-components";
import tw from "twin.macro"

export const AppLayout = styled.main.attrs({
  className: "w-full bg-gray-100 p-2 opacity-0 animate-showup duration-150 transition"
})`
  & {
    h1{
      ${tw`text-3xl font-semibold`}
    }
  }
`;

export const NavLayout = styled.nav.attrs({
  className: "w-full h-20 relative bg-gray-200 lg:h-16 lg:grid lg:grid-cols-3 xl:h-16 xl:grid xl:grid-cols-3"
})`
  & {
    ul{
      ${tw`flex h-full`}
    }
    li{
      ${tw`text-sm w-full flex items-center justify-center`}
    }
    a{
      ${tw`text-sm font-semibold text-gray-900`}
    }
    button{
      ${tw`lg:absolute lg:inset-y-0 lg:right-0 lg:mr-6 xl:absolute xl:inset-y-0 xl:right-0 xl:mr-6`}
    }
  }
`;

export const FooterLayout = styled.footer.attrs({
  className: "w-full h-48 bg-blue-600 p-2"
})`
  & {
    p{
      ${tw`text-sm font-semibold`}
    }
  }
`;

export const StyledForm = styled.div.attrs({
  className: "flex flex-col h-auto justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-sm`}
    }
    input {
      ${tw`mb-4 w-full hover:border-gray-500 active:border-gray-500 focus:border-blue-500 border border-solid border-gray-400 rounded py-2 px-4 transition duration-150`}
    }
    button {
      ${tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded transition duration-150`}
    }
    label{
      ${tw`w-full `}
    }
    .anchor{
      ${tw`w-auto bg-transparent text-blue-400 hover:text-blue-500 cursor-pointer ml-2`}
    }
    .github_btn{
        ${tw`w-full bg-gray-900 hover:bg-black text-white font-thin py-2 px-4 mb-2 rounded transition duration-150`}
    }
    .google_btn{
        ${tw`w-full bg-white hover:bg-gray-200 text-gray-900 font-thin border border-gray-700 hover:border-gray-800 py-2 px-4 mb-2 rounded transition duration-150`}
    }
  }
`