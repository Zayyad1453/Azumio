import React, { Component } from 'react';
import { Questions } from '../utils/questions';
import FormComponent from './components/formComponent';
import NavComponent from './components/navComponent';

class Main extends Component {
  state = {
    selection: [],
    currentTab: 0,
  }

  selectOption = (item, isChecked) => {
    let selection = this.state.selection;
    let updatedSelection = [];
    if (!isChecked) {
      updatedSelection = selection;
      updatedSelection.push(item)
      this.setState({ selection: updatedSelection })
    } else {
      updatedSelection = selection.filter(x => {
        return x !== item
      })
      this.setState({ selection: updatedSelection })
    }
  }

  navigateTo = (navTab,totalTabs) => {
    if (navTab >= 0 && navTab <= totalTabs-1){    
      this.setState({
        currentTab: navTab,
        selection: [],
      })
    }
  }

  submit = () => {
    alert("submit clicked");
  }

  render() {
    const { selection, currentTab } = this.state;
    const QuestionSelection = Questions[currentTab];
    return (
      // <section id="main">
        <div className="container mx-auto font-sm p-md">
          {
            QuestionSelection &&
            <FormComponent
              selection={selection}
              selectOption={this.selectOption}
              {...QuestionSelection} />
          }
          {
            Questions &&
            <NavComponent
              questions={Questions}
              selection={selection}
              currentTab={currentTab}
              navigateTo={this.navigateTo}
              submit={this.submit}
              {...Questions} />
          }
        </div>
      // </section>
    );
  }
}

export default Main;
