import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import JSONDigger from 'json-digger';
import uuid from 'uuid/v4';

@Component({
  selector: 'app-edit-chart',
  templateUrl: './edit-chart.component.html',
  styleUrls: ['./edit-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditChartComponent implements OnInit {

  ds = {
    id: '1',
    name: 'Lao Lao',
    title: 'general manager',
    children: [
      { id: '2', name: 'Bo Miao', title: 'department manager' },
      {
        id: '3',
        name: 'Su Miao',
        title: 'department manager',
        children: [
          { id: '4', name: 'Tie Hua', title: 'senior engineer' },
          {
            id: '5',
            name: 'Hei Hei',
            title: 'senior engineer',
            children: [
              { id: '6', name: 'Dan Zai', title: 'engineer' },
              { id: '7', name: 'Dan Dan', title: 'engineer' },
              { id: '8', name: 'Xiang Xiang', title: 'engineer' },
              { id: '9', name: 'Ke Xin', title: 'engineer' },
              { id: '10', name: 'Xiao Dan', title: 'engineer' },
              { id: '11', name: 'Dan Dan Zai', title: 'engineer' }
            ]
          },
          { id: '12', name: 'Pang Pang', title: 'senior engineer' },
          { id: '13', name: 'Er Pang', title: 'senior engineer' },
          { id: '14', name: 'San Pang', title: 'senior engineer' },
          { id: '15', name: 'Si Pang', title: 'senior engineer' }
        ]
      },
      { id: '16', name: 'Hong Miao', title: 'department manager' },
      { id: '17', name: 'Chun Miao', title: 'department manager' },
      { id: '18', name: 'Yu Li', title: 'department manager' },
      { id: '19', name: 'Yu Jie', title: 'department manager' },
      { id: '20', name: 'Yu Wei', title: 'department manager' },
      { id: '21', name: 'Yu Tie', title: 'department manager' }
    ]
  };
  dsDigger = new JSONDigger(this.ds, 'id', 'children');
  nodeHeadingProperty = 'name';
  nodeContentProperty = 'title';
  newNodeName = new FormControl('');
  newNodeTitle = new FormControl('');
  selectedNodes = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() { }

  onNodeClick(nodeData) {
    const node = Object.assign({}, nodeData);
    delete node.children;
    const index = this.selectedNodes.map(item => item.id).indexOf(node.id);
    if (index === -1) {
      this.selectedNodes.push(node);
    } else {
      this.selectedNodes.splice(index, 1);
    }
  }

  onChartClick() {
    this.selectedNodes = [];
  }

  async addChildNode2Datasource() {
    await Promise.all(this.selectedNodes.map((node) => {
      return this.dsDigger.addChildren(node.id, {
        id: uuid(),
        name: this.newNodeName.value,
        title: this.newNodeTitle.value
      });
    }));
  }

  addChildNode() {
    from(this.addChildNode2Datasource())
      .subscribe(() => {
        this.cd.markForCheck();
      });
  }

  async addSiblingNode2Datasource() {
    await Promise.all(this.selectedNodes.map((node) => {
      return this.dsDigger.addSiblings(node.id, {
        id: uuid(),
        name: this.newNodeName.value,
        title: this.newNodeTitle.value
      });
    }));
  }

  addSiblingNode() {
    from(this.addSiblingNode2Datasource())
      .subscribe(() => {
        this.cd.markForCheck();
      });
  }

  addRootNode() {
    this.dsDigger.addRoot({
      id: uuid(),
      name: this.newNodeName.value,
      title: this.newNodeTitle.value
    });
  }

  removeNodes() {
    from(this.dsDigger.removeNodes(this.selectedNodes.map(node => node.id)))
      .subscribe(() => {
        this.cd.markForCheck();
        this.selectedNodes = [];
      });
  }

  async updateNodeInDatasource() {
    await Promise.all(this.selectedNodes.map((node) => {
      return this.dsDigger.updateNode({
        id: node.id,
        name: this.newNodeName.value,
        title: this.newNodeTitle.value
      });
    }));
  }

  updateNodes() {
    from(this.updateNodeInDatasource())
      .subscribe(() => {
        this.cd.markForCheck();
      });
  }
}
