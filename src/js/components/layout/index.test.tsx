import React from "react"
import { BrowserRouter} from "react-router-dom"
import { Layout } from "."
import { render } from "@testing-library/react"
import { fireEvent, screen  } from "@testing-library/dom";

const mockUseAuthStore = jest.fn();
jest.mock("../../stores/use-auth-store", () => ( {
      useAuthStore: () => mockUseAuthStore(),
     }))
     
     const mockNavigate = jest.fn();
//      const mockUseNavigate = jest.fn().mockReturnValue(mockNavigate)
jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockNavigate
    }
})

describe("Layoutコンポーネントのテスト", () => {
    test("コンポーネントが正しくレンタリングされること",() => {
        mockUseAuthStore.mockReturnValue({
            isLoggedIn: true,
            isLoginCheckDone: true,
            logout: () => {},
            userName: "山田太郎",
        })
    render(
       < BrowserRouter>
           <Layout title="Todoリスト">
        <div>コンポーネントのchildren</div>
       </Layout>
        </BrowserRouter>,
    )
    const button = screen.getByRole("button", { name: "ログアウト" });
   expect(screen.getByRole("heading", {name: "Todoリスト"})).toBeInTheDocument()
   expect(screen.getByText("山田太郎")).toBeInTheDocument()
   expect(screen.getByRole("button", {name: "ログアウト"}),
).toBeInTheDocument();

expect(screen.getByText("コンポーネントのchildren")).toBeInTheDocument();
    })
    test("isLoginCheckDoneがtrueでisLoggedInがfalseのとき、/login に遷移すること",() => {
        mockUseAuthStore.mockReturnValue({
            isLoggedIn: false,
            isLoginCheckDone: true,
            logout: () => {},
            userName: "山田太郎",
        })
    render(
       < BrowserRouter>
           <Layout title="Todoリスト">
        <div>コンポーネントのchildren</div>
       </Layout>
        </BrowserRouter>,

    )
    expect(mockNavigate).toHaveBeenCalledWith("/login")
    })
    test("isLoginCheckがfalseでisLoggedInがfalseのとき、何もレンタリングされないこと", () => {
        mockUseAuthStore.mockReturnValue({
            isLoggedIn: false,
            isLoginCheckDone: true,
            logout: () => {},
            userName: "山田太郎",
        })
    render(
       < BrowserRouter>
           <Layout title="Todoリスト">
        <div>コンポーネントのchildren</div>
       </Layout>
        </BrowserRouter>,

    )
    expect(screen.queryByRole("heading", {name: "Todoリスト"})
).not.toBeInTheDocument()
   expect(screen.queryByText("山田太郎")).not.toBeInTheDocument()
   expect(
    screen.queryByText("コンポーネントのchildren")).not.toBeInTheDocument()

   expect(screen.queryByRole("button", {name: "ログアウト"}),
).not.toBeInTheDocument();
    })
    test("ログアウトボタンをクリックされると、logout関数が呼ばれること", () => {
        const mockLogut = jest.fn();
        mockUseAuthStore.mockReturnValue({
            isLoggedIn: false,
            isLoginCheckDone: true,
            logout: mockLogut,
            userName: "山田太郎",
        })
    render(
       < BrowserRouter>
           <Layout title="Todoリスト">
        <div>コンポーネントのchildren</div>
       </Layout>
        </BrowserRouter>,
    )
   const button = screen.getByRole("button", {name: "ログアウト"})
   fireEvent.click(button)
   expect(mockLogut).toHaveBeenCalled()
    })
})