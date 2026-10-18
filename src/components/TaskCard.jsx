import React from 'react';
import {Pencil, Trash2, CalendarDays} from 'lucide-react';
export default function TaskCard({task,onEdit,onDelete,onStatus}){
 return <article className="task-card"><div className="task-top"><span className={'priority '+task.priority}>{task.priority==='high'?'Yüksek':task.priority==='medium'?'Orta':'Düşük'} öncelik</span><div className="actions"><button aria-label="Düzenle" onClick={()=>onEdit(task)}><Pencil size={16}/></button><button aria-label="Sil" onClick={()=>onDelete(task.id)}><Trash2 size={16}/></button></div></div><h3>{task.title}</h3><p>{task.description||'Açıklama eklenmedi.'}</p><div className="task-bottom"><span><CalendarDays size={14}/> {task.date||'Tarih yok'}</span><select aria-label="Durum" value={task.status} onChange={e=>onStatus(task.id,e.target.value)}><option value="todo">Yapılacak</option><option value="progress">Devam Ediyor</option><option value="done">Tamamlandı</option></select></div></article>
}
