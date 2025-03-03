import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";

import { addMaterial, deleteMaterial, fetchMaterials, updateMaterial } from "./materialAPI";
import { MaterialForm } from "./MaterialForm";
import { MaterialList } from "./MaterialList";

export class MaterialApp extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const fetchedMaterials = await fetchMaterials();
      this.setState({
        materials: fetchedMaterials,
      });
    } catch (error) {
      toast.error("bad request");
    }
  }

  addNewMaterial = async (values) => {
    try {
      this.setState({
        isLoading: true,
      });
      const material = await addMaterial(values);
      this.setState((prevState) => {
        return {
          materials: [material, ...prevState.materials],
        };
      });
      toast.success("element added");
    } catch (error) {
      toast.error("bad request");
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  deleteMaterial = async (id) => {
    try {
      this.setState({
        isLoading: true,
      });
      await deleteMaterial(id);
      this.setState((prevState) => {
        return {
          materials: prevState.materials.filter((el) => {
            return el.id !== id;
          }),
        };
      });
    } catch (error) {
      toast.error("some error");
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onUpdateMaterial = async (fields) => {
    const updatedMaterial = await updateMaterial(fields);
    this.setState(prevState => ({
        materials: prevState.materials.map(el => {
            el.id === fields.id ? updatedMaterial : el
        })
    }))
  }

  render() {
    const { isLoading, materials } = this.state;

    return (
      <>
        <h2>Material task</h2>
        {isLoading && <p> Loading ... </p>}
        <MaterialForm onSubmit={this.addNewMaterial} isSubbmiting={isLoading} />
        <MaterialList
          items={materials}
          onDelete={this.deleteMaterial}
          isDellitting={isLoading}
          onUpdate={this.onUpdateMaterial}
        />
        <Toaster />
      </>
    );
  }
}
