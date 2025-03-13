import { fireEvent, render } from "@testing-library/react"
import { TodoTable } from "."
import React from "react"
import { screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"


describe("TodoTableコンポーネントのテスト", () => {
  test("削除ボタンがクリックされたときに、deleteTodoが呼ばれること", () => {
    const mockDeleteTodo = jest.fn();
    render(
      <BrowserRouter>
        <TodoTable
          todoList={[
            {
              id: "123",
              task: "掃除",
              person: "山田太郎",
              deadline: "2024-09-12",
            },
            {
              id: "456",
              task: "買い物",
              person: "田中太郎",
              deadline: "2024-09-14",
            },
          ]}
          deleteTodo={mockDeleteTodo}
        />
      </BrowserRouter>
    );

    const buttonList = screen.getAllByRole("button", { name: "削除" });
    expect(buttonList).toHaveLength(2); // ボタンの数を確認
    fireEvent.click(buttonList[0]);
    expect(mockDeleteTodo).toHaveBeenCalledWith("123");
    fireEvent.click(buttonList[1]);
    expect(mockDeleteTodo).toHaveBeenCalledWith("456");
  });
});